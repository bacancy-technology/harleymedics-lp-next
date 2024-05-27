import moment from 'moment';
import Cookies from 'js-cookie';

export const HeadersWithAuth = (token = null, uploadFile = false) => {
  // return authorization header with jwt token
  let authToken = Cookies.get('authToken');
  if (!authToken) {
    authToken = token;
  }
  if (authToken) {
    return {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': `${
        uploadFile ? 'multipart/form-data' : 'application/json'
      }`,
      Authorization: `Bearer ${authToken}`,
    };
  } else {
    return {};
  }
};

export const HeadersWithoutAuth = (uploadFile = false) => {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': `${
      uploadFile ? 'multipart/form-data' : 'application/json'
    }`,
  };
};

export const css_browser_selector = (u) => {
  var ua = u.toLowerCase(),
    is = function (t) {
      return ua.indexOf(t) > -1;
    },
    g = 'gecko',
    w = 'webkit',
    s = 'safari',
    o = 'opera',
    m = 'mobile',
    h = document.documentElement,
    b = [
      !/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua)
        ? 'ie ie' + RegExp.$1
        : is('firefox/2')
        ? g + ' ff2'
        : is('firefox/3.5')
        ? g + ' ff3 ff3_5'
        : is('firefox/3.6')
        ? g + ' ff3 ff3_6'
        : is('firefox/3')
        ? g + ' ff3'
        : is('gecko/')
        ? g
        : is('opera')
        ? o +
          (/version\/(\d+)/.test(ua)
            ? ' ' + o + RegExp.$1
            : /opera(\s|\/)(\d+)/.test(ua)
            ? ' ' + o + RegExp.$2
            : '')
        : is('konqueror')
        ? 'konqueror'
        : is('blackberry')
        ? m + ' blackberry'
        : is('android')
        ? m + ' android'
        : is('chrome')
        ? w + ' chrome'
        : is('iron')
        ? w + ' iron'
        : is('applewebkit/')
        ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '')
        : is('mozilla/')
        ? g
        : '',
      is('j2me')
        ? m + ' j2me'
        : is('iphone')
        ? m + ' iphone'
        : is('ipod')
        ? m + ' ipod'
        : is('ipad')
        ? m + ' ipad'
        : is('mac')
        ? 'mac'
        : is('darwin')
        ? 'mac'
        : is('webtv')
        ? 'webtv'
        : is('win')
        ? 'win' + (is('windows nt 6.0') ? ' vista' : '')
        : is('freebsd')
        ? 'freebsd'
        : is('x11') || is('linux')
        ? 'linux'
        : '',
      'js',
    ];
  let c = b.join(' ');
  h.className += ' ' + c;
  return c;
};
