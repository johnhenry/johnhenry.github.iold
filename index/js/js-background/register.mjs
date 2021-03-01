const local = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))
CSS.paintWorklet.addModule(local+'/index.mjs');

