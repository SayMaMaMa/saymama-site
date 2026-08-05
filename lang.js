// Переключение EN/RU: ?lang=ru, сохранённый выбор, иначе EN.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var fromUrl = new URLSearchParams(location.search).get('lang');
  var lang = (fromUrl === 'ru' || fromUrl === 'en') ? fromUrl : (saved === 'ru' ? 'ru' : 'en');
  document.documentElement.setAttribute('data-lang', lang);

  window.setLang = function (l) {
    document.documentElement.setAttribute('data-lang', l);
    try { localStorage.setItem('lang', l); } catch (e) {}
  };
})();
