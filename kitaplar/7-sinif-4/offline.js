window.OFFLINE_LIBS=['lib/jspdf.umd.min.js','lib/jspdf.plugin.autotable.min.js'];
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
}
