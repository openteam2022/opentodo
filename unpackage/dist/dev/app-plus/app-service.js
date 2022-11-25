var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  function formatAppLog(type2, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type2, filename, ...args);
    } else {
      console[type2].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
    __name: "statusBar",
    props: {
      fontColor: { type: String, required: false },
      bgColor: { type: String, required: false }
    },
    setup(__props) {
      const props = __props;
      const bg = vue.ref(props.bgColor) || "#FFF";
      vue.watch(props, (n, o) => {
        bg.value = n.bgColor;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "status-bar",
          style: vue.normalizeStyle({ background: vue.unref(bg) })
        }, null, 4);
      };
    }
  });
  var StatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-572a08ca"], ["__file", "E:/app/vue-app/openplanvue/components/common/statusBar/statusBar.vue"]]);
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$j = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$2], ["__scopeId", "data-v-a2e81f6e"], ["__file", "E:/app/vue-app/openplanvue/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    __name: "header",
    props: {
      fontColor: { type: String, required: false },
      bgColor: { type: String, required: false },
      type: { type: String, required: false },
      title: { type: String, required: false },
      back: { type: Boolean, required: false }
    },
    emits: ["changeTabs"],
    setup(__props, { emit }) {
      const props = __props;
      const bg = vue.ref(props.bgColor || "#FFF");
      const fc = vue.ref(props.fontColor || "#333");
      const type2 = vue.ref(props.type || "tabs");
      const title = vue.ref(props.title || "\u6807\u9898");
      const back = vue.ref(props.back || false);
      vue.watch(props, (n, o) => {
        bg.value = n.bgColor;
        fc.value = n.fontColor;
      });
      const tabs = ["\u5F85\u529E", "\u8BA1\u5212"];
      const current = vue.ref(0);
      const changeTabs = (index) => {
        current.value = index;
        emit("changeTabs", index);
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "header",
          style: vue.normalizeStyle({ background: bg.value, color: fc.value })
        }, [
          type2.value == "title" ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "header-title"
          }, [
            vue.createElementVNode("span", {
              class: "header-title-icon",
              onClick: goBack
            }, [
              vue.createVNode(_component_uni_icons, {
                color: fc.value,
                type: "left",
                size: "23"
              }, null, 8, ["color"])
            ]),
            vue.createElementVNode("text", { class: "header-title-text" }, vue.toDisplayString(title.value), 1)
          ])) : vue.createCommentVNode("v-if", true),
          type2.value == "tabs" ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            class: "header-tabs"
          }, [
            back.value ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: "header-tabs-icon",
              onClick: goBack
            }, [
              vue.createVNode(_component_uni_icons, {
                color: fc.value,
                type: "left",
                size: "23"
              }, null, 8, ["color"])
            ])) : vue.createCommentVNode("v-if", true),
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs, (item, index) => {
              return vue.createElementVNode("text", {
                class: vue.normalizeClass(["header-tabs-item", current.value == index ? "active-tabs" : ""]),
                onClick: ($event) => changeTabs(index)
              }, vue.toDisplayString(item), 11, ["onClick"]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true)
        ], 4);
      };
    }
  });
  var Header = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-25795966"], ["__file", "E:/app/vue-app/openplanvue/components/common/header/header.vue"]]);
  const _sfc_main$h = {
    name: "uniSwipeAction",
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    methods: {
      resize() {
      },
      closeAll() {
        this.children.forEach((vm) => {
          vm.is_show = "none";
        });
      },
      closeOther(vm) {
        if (this.openItem && this.openItem !== vm) {
          this.openItem.is_show = "none";
        }
        this.openItem = vm;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  var UniSwipeAction = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$1], ["__file", "E:/app/vue-app/openplanvue/uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue"]]);
  let mpMixins = {};
  mpMixins = {
    data() {
      return {
        is_show: "none"
      };
    },
    watch: {
      show(newVal) {
        this.is_show = this.show;
      }
    },
    created() {
      this.swipeaction = this.getSwipeAction();
      if (this.swipeaction.children !== void 0) {
        this.swipeaction.children.push(this);
      }
    },
    mounted() {
      this.is_show = this.show;
    },
    methods: {
      closeSwipe(e) {
        if (!this.autoClose)
          return;
        this.swipeaction.closeOther(this);
      },
      change(e) {
        this.$emit("change", e.open);
        if (this.is_show !== e.open) {
          this.is_show = e.open;
        }
      },
      appTouchStart(e) {
        const {
          clientX
        } = e.changedTouches[0];
        this.clientX = clientX;
        this.timestamp = new Date().getTime();
      },
      appTouchEnd(e, index, item, position) {
        const {
          clientX
        } = e.changedTouches[0];
        let diff = Math.abs(this.clientX - clientX);
        let time = new Date().getTime() - this.timestamp;
        if (diff < 40 && time < 300) {
          this.$emit("click", {
            content: item,
            index,
            position
          });
        }
      },
      onClickForPC(index, item, position) {
        return;
      }
    }
  };
  var mpwxs = mpMixins;
  let bindIngXMixins = {};
  let otherMixins = {};
  var block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxsswipe");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxsswipe"] = "13d3b3b0";
  };
  var block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("renderswipe");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["renderswipe"] = "5a1e922e";
  };
  const _sfc_main$g = {
    mixins: [mpwxs, bindIngXMixins, otherMixins],
    emits: ["click", "change"],
    props: {
      show: {
        type: String,
        default: "none"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      threshold: {
        type: Number,
        default: 20
      },
      leftOptions: {
        type: Array,
        default() {
          return [];
        }
      },
      rightOptions: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    methods: {
      uninstall() {
        if (this.swipeaction) {
          this.swipeaction.children.forEach((item, index) => {
            if (item === this) {
              this.swipeaction.children.splice(index, 1);
            }
          });
        }
      },
      getSwipeAction(name = "uniSwipeAction") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" \u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F app vue\u7AEF h5 \u4F7F\u7528wxs \u5B9E\u73B0"),
      vue.createElementVNode("view", { class: "uni-swipe" }, [
        vue.createElementVNode("view", {
          class: "uni-swipe_box",
          "change:prop": _ctx.wxsswipe.showWatch,
          prop: _ctx.is_show,
          "data-threshold": $props.threshold,
          "data-disabled": $props.disabled,
          onTouchstart: _cache[2] || (_cache[2] = (...args) => _ctx.wxsswipe.touchstart && _ctx.wxsswipe.touchstart(...args)),
          onTouchmove: _cache[3] || (_cache[3] = (...args) => _ctx.wxsswipe.touchmove && _ctx.wxsswipe.touchmove(...args)),
          onTouchend: _cache[4] || (_cache[4] = (...args) => _ctx.wxsswipe.touchend && _ctx.wxsswipe.touchend(...args))
        }, [
          vue.createCommentVNode(" \u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F app vue\u7AEF h5 \u4F7F\u7528wxs \u5B9E\u73B0"),
          vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--left" }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.leftOptions, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  style: vue.normalizeStyle({
                    backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                  }),
                  class: "uni-swipe_button button-hock",
                  onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
                  onTouchend: ($event) => _ctx.appTouchEnd($event, index, item, "left"),
                  onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index, item, "left"), ["stop"])
                }, [
                  vue.createElementVNode("text", {
                    class: "uni-swipe_button-text",
                    style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                  }, vue.toDisplayString(item.text), 5)
                ], 44, ["onTouchend", "onClick"]);
              }), 128))
            ], true)
          ]),
          vue.createElementVNode("view", { class: "uni-swipe_text--center" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--right" }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.rightOptions, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  style: vue.normalizeStyle({
                    backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                  }),
                  class: "uni-swipe_button button-hock",
                  onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
                  onTouchend: ($event) => _ctx.appTouchEnd($event, index, item, "right"),
                  onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index, item, "right"), ["stop"])
                }, [
                  vue.createElementVNode("text", {
                    class: "uni-swipe_button-text",
                    style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                  }, vue.toDisplayString(item.text), 5)
                ], 44, ["onTouchend", "onClick"]);
              }), 128))
            ], true)
          ])
        ], 40, ["change:prop", "prop", "data-threshold", "data-disabled"])
      ]),
      vue.createCommentVNode(" app nvue\u7AEF \u4F7F\u7528 bindingx "),
      vue.createCommentVNode(" \u5176\u4ED6\u5E73\u53F0\u4F7F\u7528 js \uFF0C\u957F\u5217\u8868\u6027\u80FD\u53EF\u80FD\u4F1A\u6709\u5F71\u54CD")
    ], 2112);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$g);
  if (typeof block1 === "function")
    block1(_sfc_main$g);
  var UniSwipeActionItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render], ["__scopeId", "data-v-41bc30c0"], ["__file", "E:/app/vue-app/openplanvue/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key) {
    if (key === void 0)
      key = null;
    return vue.inject(key !== null ? key : storeKey);
  }
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type2 = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type2, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type2 = args.type;
        if (!options || !options.root) {
          type2 = namespace + type2;
          if (!store2._actions[type2]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type2);
            return;
          }
        }
        return store2.dispatch(type2, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type2 = args.type;
        if (!options || !options.root) {
          type2 = namespace + type2;
          if (!store2._mutations[type2]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type2);
            return;
          }
        }
        store2.commit(type2, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type2) {
        if (type2.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type2.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type2];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type2, handler, local) {
    var entry = store2._mutations[type2] || (store2._mutations[type2] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type2, handler, local) {
    var entry = store2._actions[type2] || (store2._actions[type2] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type2, rawGetter, local) {
    if (store2._wrappedGetters[type2]) {
      {
        console.error("[vuex] duplicate getter key: " + type2);
      }
      return;
    }
    store2._wrappedGetters[type2] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type2, payload, options) {
    if (isObject(type2) && type2.type) {
      options = payload;
      payload = type2;
      type2 = type2.type;
    }
    {
      assert(typeof type2 === "string", "expects string as the type, but found " + typeof type2 + ".");
    }
    return { type: type2, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(function(module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register2(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type2) {
        assert(assertOptions.assert(value), makeAssertionMessage(path, key, type2, value, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type2, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type2 + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type2, payload) {
      return dispatch.call(store2, type2, payload);
    };
    this.commit = function boundCommit(type2, payload, options2) {
      return commit.call(store2, type2, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type2 = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type: type2, payload };
    var entry = this._mutations[type2];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type2);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type2 + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type2 = ref.type;
    var payload = ref.payload;
    var action = { type: type2, payload };
    var entry = this._actions[type2];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type2);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const type = [
    {
      id: 0,
      text: "\u666E\u901A",
      color: "#ddd"
    },
    {
      id: 1,
      text: "\u91CD\u8981",
      color: "#ffc954"
    },
    {
      id: 2,
      text: "\u91CD\u8981\u7D27\u6025",
      color: "#f45453"
    }
  ];
  const color = ["#ddd", "#ffc954", "#f45453"];
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    __name: "todo",
    props: {
      data: { type: Array, required: false }
    },
    emits: ["changeTodo", "removeTodo"],
    setup(__props, { emit }) {
      const props = __props;
      const options = [
        {
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#fc5531"
          }
        }
      ];
      const { state } = useStore();
      const { data } = vue.reactive(props);
      const todo = vue.ref(data || []);
      vue.watch(props, (n, o) => {
        todo.value = n.data;
      });
      const change = (id, index) => {
        let data2 = {
          index,
          id
        };
        emit("removeTodo", data2);
      };
      const changeSuccess = (index, id) => {
        let data2 = {
          index,
          id
        };
        emit("changeTodo", data2);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "todo" }, [
          vue.createElementVNode("ul", { class: "todo-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(todo.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                class: "todo-list-item",
                style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor, "border-left": `8rpx ${vue.unref(color)[item.type]} solid` })
              }, [
                vue.createVNode(UniSwipeAction, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(UniSwipeActionItem, {
                      style: { "border-radius": "8rpx" },
                      "right-options": options,
                      onClick: ($event) => change(item.id, index)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", { class: "todo-list-item-wrapper" }, [
                          vue.createElementVNode("div", { class: "tlic-content" }, [
                            vue.createElementVNode("div", {
                              class: "tlic-content-title",
                              style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolordeep : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.content), 5),
                            vue.createElementVNode("div", {
                              class: "tlic-content-date",
                              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, [
                              vue.createElementVNode("span", null, vue.toDisplayString(item.create_time), 1)
                            ], 4)
                          ]),
                          vue.createElementVNode("div", { class: "tlic-check" }, [
                            item.status == 0 ? (vue.openBlock(), vue.createElementBlock("span", {
                              key: 0,
                              class: "tlic-check-defalut",
                              onClick: ($event) => changeSuccess(index, item.id)
                            }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("span", {
                              key: 1,
                              class: "tlic-check-success"
                            }, [
                              vue.createVNode(_component_uni_icons, {
                                color: vue.unref(state).theme.fontcolorshallow,
                                type: "checkbox-filled",
                                size: "28"
                              }, null, 8, ["color"])
                            ]))
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ], 4);
            }), 256))
          ])
        ]);
      };
    }
  });
  var Todo$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-51279c8c"], ["__file", "E:/app/vue-app/openplanvue/components/home/todo/todo.vue"]]);
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    __name: "progress",
    props: {
      type: { type: Boolean, required: false },
      bgColor: { type: String, required: false },
      color: { type: String, required: false },
      value: { type: String, required: false }
    },
    setup(__props) {
      const props = __props;
      vue.useCssVars((_ctx) => ({
        "1efdad66-progress": progress.value
      }));
      const type2 = vue.ref(props.type);
      const bgcolor = vue.ref(props.bgColor || "#1abc8d");
      const color2 = vue.ref(props.color || "#333");
      const value = vue.ref(props.value || 0);
      const progress = vue.ref(value.value + "%");
      vue.watch(props, (n, o) => {
        value.value = n.value;
        progress.value = value.value + "%";
        color2.value = n.color || "#333";
      });
      vue.ref(null);
      vue.ref(null);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "progress" }, [
          type2.value ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
            vue.createElementVNode("div", { class: "circle" }, [
              vue.createElementVNode("div", { class: "shadow" }),
              vue.createElementVNode("div", {
                class: "text",
                style: vue.normalizeStyle({ color: color2.value })
              }, [
                vue.createElementVNode("span", null, "\u5B8C\u6210"),
                vue.createElementVNode("span", null, vue.toDisplayString(value.value) + "%", 1)
              ], 4)
            ])
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "progress-line"
          }, [
            vue.createElementVNode("view", { class: "progress-line-wrapper" }, [
              vue.createElementVNode("view", {
                class: "progress-line-wrapper-bar",
                style: vue.normalizeStyle({ background: bgcolor.value, width: `${value.value}%` })
              }, null, 4)
            ])
          ]))
        ]);
      };
    }
  });
  var Progress = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-1efdad66"], ["__file", "E:/app/vue-app/openplanvue/components/common/progress/progress.vue"]]);
  class Dates {
    constructor() {
      this.date = new Date();
      this.getYear();
      this.getMonth();
      this.getDay();
      this.getHour();
      this.getMinute();
      this.getSecond();
    }
    getWeek() {
      let week = new Date(this.getTime());
      let day = week.getDay() == 0 ? 7 : week.getDay();
      return day;
    }
    getYear() {
      this.year = this.date.getFullYear();
      return this.year;
    }
    getMonth() {
      this.month = this.date.getMonth() + 1;
      return this.month;
    }
    getDay() {
      let day = this.date.getDate();
      this.day = day < 10 ? `0${day}` : day;
      return this.day;
    }
    getHour() {
      this.hour = this.date.getHours();
      return this.hour;
    }
    getMinute() {
      let minute = this.date.getMinutes();
      this.minute = minute < 10 ? `0${minute}` : minute;
      return this.minute;
    }
    getSecond() {
      let second = this.date.getSeconds();
      this.second = second < 10 ? `0${second}` : second;
      return this.second;
    }
    getDate() {
      let date2 = `${this.year}-${this.month}-${this.day}`;
      return date2;
    }
    getTime() {
      let time = `${this.getDate()} ${this.hour}:${this.minute}:${this.second}`;
      return time;
    }
    differDay(startDate, endDate) {
      let now = new Date(startDate).valueOf();
      let end = new Date(endDate).valueOf();
      let DifferDay = Math.ceil((end - now) / 864e5);
      if (DifferDay < 0) {
        return 0;
      } else {
        return DifferDay;
      }
    }
  }
  const date = new Dates();
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    __name: "plan",
    props: {
      data: { type: Array, required: false }
    },
    emits: ["changePlan", "removePlan"],
    setup(__props, { emit }) {
      const props = __props;
      formatAppLog("log", "at components/home/plan/plan.vue:54", color[0]);
      const options = [
        {
          text: "\u5B8C\u6210",
          style: {
            backgroundColor: "#67C23A"
          }
        },
        {
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#fc5531"
          }
        }
      ];
      const optionStatus = [
        {
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#fc5531"
          }
        }
      ];
      const plan = vue.ref(props.data || []);
      vue.onMounted(() => {
        plan.value.forEach((item) => {
          item.progress = progress(item);
          item.differDate = date.differDay(date.getTime(), item.end_time);
        });
      });
      vue.watch(props, (n, o) => {
        plan.value = n.data;
      });
      const { state } = useStore();
      const changeDefault = (e, id, index) => {
        let data = {
          id,
          index
        };
        if (e.index == 0) {
          emit("changePlan", data);
        } else {
          emit("removePlan", data);
        }
      };
      const changeSuccess = (e, id, index) => {
        let data = {
          id,
          index
        };
        emit("removePlan", data);
      };
      const goPlan = (index) => {
        uni.navigateTo({
          url: "/pages/plan/plan?index=" + index
        });
      };
      const progress = (item) => {
        let items = item.child.length;
        let successMark = 0;
        let progress2 = 0;
        if (items > 0) {
          item.child.forEach((item2) => {
            if (item2.status == 1) {
              successMark += 1;
            }
          });
          if (successMark == 0) {
            progress2 = 0;
          } else {
            let number = Math.ceil(successMark / items * 100);
            progress2 = number;
          }
        } else {
          if (plan.value.status == 1) {
            progress2 = 100;
          } else {
            progress2 = 0;
          }
        }
        return progress2;
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "plan" }, [
          vue.createElementVNode("ul", { class: "plan-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(plan.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                class: "plan-list-item",
                style: vue.normalizeStyle({ borderLeft: `8rpx ${vue.unref(color)[item.type]} solid` })
              }, [
                item.status == 0 ? (vue.openBlock(), vue.createBlock(UniSwipeAction, { key: 0 }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(UniSwipeActionItem, {
                      style: { "border-radius": "0 8rpx 8rpx 0" },
                      "right-options": options,
                      onClick: ($event) => changeDefault($event, item.id, index)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", {
                          class: "plan-list-item-wrapper",
                          style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
                        }, [
                          vue.createElementVNode("div", {
                            class: "plic-content",
                            onClick: ($event) => goPlan(index)
                          }, [
                            vue.createElementVNode("div", {
                              class: "plic-content-title",
                              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.name), 5),
                            vue.createElementVNode("div", { class: "plic-content-date" }, [
                              vue.createElementVNode("span", {
                                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                              }, vue.toDisplayString(item.create_time.substring(0, 10)) + " \u81F3 " + vue.toDisplayString(item.end_time.substring(0, 10)), 5),
                              item.status == 0 ? (vue.openBlock(), vue.createElementBlock("span", { key: 0 }, "\u5269\u4E0B" + vue.toDisplayString(item.differDate) + "\u5929", 1)) : vue.createCommentVNode("v-if", true)
                            ])
                          ], 8, ["onClick"]),
                          vue.createElementVNode("div", { class: "plic-check" }, [
                            vue.createVNode(Progress, {
                              type: "",
                              color: vue.unref(state).theme.fontcolordeep,
                              value: item.progress
                            }, null, 8, ["color", "value"])
                          ])
                        ], 4)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : (vue.openBlock(), vue.createBlock(UniSwipeAction, { key: 1 }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(UniSwipeActionItem, {
                      style: { "border-radius": "0 8rpx 8rpx 0" },
                      "right-options": optionStatus,
                      onClick: ($event) => changeSuccess($event, item.id, index)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", {
                          class: "plan-list-item-wrapper",
                          style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
                        }, [
                          vue.createElementVNode("div", {
                            class: "plic-content",
                            onClick: ($event) => goPlan(index)
                          }, [
                            vue.createElementVNode("div", {
                              class: "plic-content-title",
                              style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolordeep : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.name), 5),
                            vue.createElementVNode("div", { class: "plic-content-date" }, [
                              vue.createElementVNode("span", {
                                style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolordeep : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                              }, vue.toDisplayString(item.create_time.substring(0, 10)) + " \u81F3 " + vue.toDisplayString(item.end_time.substring(0, 10)), 5),
                              item.status == 0 ? (vue.openBlock(), vue.createElementBlock("span", { key: 0 }, "\u5269\u4E0B" + vue.toDisplayString(item.differDate) + "\u5929", 1)) : vue.createCommentVNode("v-if", true)
                            ])
                          ], 8, ["onClick"]),
                          vue.createElementVNode("div", { class: "plic-check" }, [
                            item.status == 0 ? (vue.openBlock(), vue.createBlock(Progress, {
                              key: 0,
                              type: "",
                              color: vue.unref(state).theme.fontcolordeep,
                              value: item.progress
                            }, null, 8, ["color", "value"])) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                              key: 1,
                              type: "checkbox-filled",
                              size: "30",
                              color: vue.unref(state).theme.fontcolorshallow
                            }, null, 8, ["color"]))
                          ])
                        ], 4)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024))
              ], 4);
            }), 256))
          ])
        ]);
      };
    }
  });
  var Plan$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-0fef979a"], ["__file", "E:/app/vue-app/openplanvue/components/home/plan/plan.vue"]]);
  const HTTP_BASE_URL = "https://qiantuxinxi.cn/";
  function goReturn() {
    uni.navigateBack({
      delita: 1
    });
  }
  function goUrl(url) {
    uni.navigateTo({
      url
    });
  }
  function goTabbarUrl(url) {
    uni.switchTab({
      url
    });
  }
  function showInfo(message) {
    uni.showToast({
      title: message,
      icon: "none"
    });
  }
  function request(url, method, data) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: HTTP_BASE_URL + url,
        data: data || {},
        method: method || "GET",
        header: { token: "openplan" },
        success: (res) => {
          let code = res.data.status;
          switch (code) {
            case 0:
              showInfo("\u7F51\u7EDC\u9519\u8BEF~");
              resolve(false);
              break;
            case 1:
              resolve(res.data.result);
              break;
          }
        },
        fail: (res) => {
          reject(false);
        }
      });
    });
  }
  const http = {};
  ["options", "get", "post", "put", "head", "delete", "trace", "connect"].forEach((method) => {
    http[method] = (url, data) => request(url, method, data);
  });
  function addTodo(data) {
    return http.post("todo/add", data);
  }
  function getTodoList(data) {
    return http.post("todo/get", data);
  }
  function finishTodo(data) {
    return http.post("todo/finish", data);
  }
  function removeTodo(data) {
    return http.post("todo/remove", data);
  }
  function addPlan(data) {
    return http.post("item/add", data);
  }
  function addTask(data) {
    return http.post("task/add", data);
  }
  function getPlan(data) {
    return http.post("item/get", data);
  }
  function finishPlan(data) {
    return http.post("item/finish", data);
  }
  function removePlan(data) {
    return http.post("item/remove", data);
  }
  function finishPlanItem(data) {
    return http.post("task/finish", data);
  }
  function removePlanItem(data) {
    return http.post("task/remove", data);
  }
  function getData(data) {
    return http.post("data/get", data);
  }
  function updateDay(data) {
    return http.post("data/updateDay", data);
  }
  function updateFinish(data) {
    return http.post("data/updateFinish", data);
  }
  function updateTotal(data) {
    return http.post("data/updateTotal", data);
  }
  function updateTime(data) {
    return http.post("data/updateTime", data);
  }
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const current = vue.ref(0);
      const { state, commit } = useStore();
      const todo = vue.ref([]);
      const plan = vue.ref([]);
      const changeTabs = (index) => {
        current.value = index;
      };
      const changeTodo = (data) => {
        finishTodo({
          uid: state.userInfo.id,
          id: data.id
        }).then((res) => {
          if (res) {
            updateFinish({
              uid: state.userInfo.id
            }).then((res2) => {
              formatAppLog("log", "at pages/index/index.vue:52", "\u66F4\u65B0\u6210\u529F");
            });
            let todo2 = state.todo;
            todo2[data.index].status = 1;
            showInfo("\u5DF2\u5B8C\u6210");
            commit("setTodo", todo2);
            let datas = state.data;
            datas.finish_number = datas.finish_number + 1;
            commit("setData", datas);
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      const deleteTodo = (data) => {
        let todo2 = state.todo;
        removeTodo({
          uid: state.userInfo.id,
          id: data.id,
          status: todo2[data.index].status
        }).then((res) => {
          if (res) {
            todo2.splice(data.index, 1);
            showInfo("\u5220\u9664\u6210\u529F");
            commit("setTodo", todo2);
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      const changePlan = (res) => {
        finishPlan({
          uid: state.userInfo.id,
          id: res.id
        }).then((data) => {
          if (data) {
            updateFinish({
              uid: state.userInfo.id
            }).then((res2) => {
              formatAppLog("log", "at pages/index/index.vue:92", "\u66F4\u65B0\u6210\u529F");
            });
            let plan2 = state.plan;
            plan2[res.index].status = 1;
            plan2[res.index].progress = 100;
            plan2[res.index].child.forEach((item) => {
              item.status = 1;
            });
            commit("setPlan", plan2);
            showInfo("\u5DF2\u5B8C\u6210");
            let datas = state.data;
            datas.finish_number = datas.finish_number + 1;
            commit("setData", datas);
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      const deletePlan = (res) => {
        let plan2 = state.plan;
        removePlan({
          uid: state.userInfo.id,
          id: res.id,
          status: plan2[res.index].status
        }).then((result) => {
          if (result) {
            plan2.splice(res.index, 1);
            showInfo("\u5220\u9664\u6210\u529F");
            commit("setPlan", plan2);
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      vue.onMounted(() => {
        if (state.todo.length == 0) {
          getTodoList({
            uid: state.userInfo.id
          }).then((res) => {
            if (res) {
              const result = res;
              commit("setTodo", result);
              todo.value = state.todo;
            }
          });
        }
        todo.value = state.todo;
        if (state.plan.length == 0) {
          getPlan({
            uid: state.userInfo.id
          }).then((res) => {
            if (res) {
              const result = res;
              result.forEach((item) => {
                item.progress = 0;
                item.differDate = 0;
              });
              commit("setPlan", result);
              plan.value = state.plan;
            }
          });
        }
        plan.value = state.plan;
        getData({
          uid: state.userInfo.id
        }).then((result) => {
          commit("setData", result);
        });
      });
      onShow(() => {
        if (state.themeIndex == "linght") {
          uni.setNavigationBarColor({
            frontColor: "#000000"
          });
        } else {
          uni.setNavigationBarColor({
            frontColor: "#ffffff"
          });
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "index",
          style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
        }, [
          vue.createElementVNode("div", { class: "index-header" }, [
            vue.createVNode(StatusBar, {
              bgColor: vue.unref(state).theme.appbgcolor
            }, null, 8, ["bgColor"]),
            vue.createVNode(Header, {
              type: "tabs",
              bgColor: vue.unref(state).theme.appbgcolor,
              fontColor: vue.unref(state).theme.fontcolordeep,
              onChangeTabs: changeTabs
            }, null, 8, ["bgColor", "fontColor"])
          ]),
          vue.createElementVNode("div", { class: "index-content" }, [
            current.value == 0 ? (vue.openBlock(), vue.createElementBlock("div", { key: 0 }, [
              vue.createVNode(Todo$1, {
                data: todo.value,
                onChangeTodo: changeTodo,
                onRemoveTodo: deleteTodo
              }, null, 8, ["data"])
            ])) : vue.createCommentVNode("v-if", true),
            current.value == 1 ? (vue.openBlock(), vue.createElementBlock("div", { key: 1 }, [
              vue.createVNode(Plan$1, {
                data: plan.value,
                onChangePlan: changePlan,
                onRemovePlan: deletePlan
              }, null, 8, ["data"])
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ], 4);
      };
    }
  });
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "E:/app/vue-app/openplanvue/pages/index/index.vue"]]);
  function checkNull(name, message) {
    if (name == "" || name == void 0 || name == null || name == 0) {
      uni.showToast({
        title: message,
        icon: "none"
      });
      return false;
    } else {
      return true;
    }
  }
  function checkStrEng(value, message) {
    const checkVaule = /^[\u4e00-\u9fa5a-zA-Z]*$/;
    if (!checkVaule.test(value) && value !== "") {
      uni.showToast({
        title: message,
        icon: "none"
      });
      return false;
    } else {
      return true;
    }
  }
  function checkStrEngInt(value, message) {
    const checkVaule = /^[\u4e00-\u9fa5a-zA-Z0-9]*$/;
    if (!checkVaule.test(value) && value !== "") {
      uni.showToast({
        title: message,
        icon: "none"
      });
      return false;
    } else {
      return true;
    }
  }
  function checkSymbol(value, message) {
    const checkVaule = /[`~!@#$^&*()《》=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
    if (checkVaule.test(value)) {
      uni.showToast({
        title: message,
        icon: "none"
      });
      return false;
    } else {
      return true;
    }
  }
  function checkPassword(password, message) {
    const checkPassword2 = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,16}$/;
    if (!checkPassword2.test(password)) {
      uni.showToast({
        title: message,
        icon: "none"
      });
      return false;
    } else {
      return true;
    }
  }
  function checkText(text, message) {
    const checkText2 = /^[\u4e00-\u9fa5a-zA-Z0-9,.!?:，。？！]*$/;
    if (!checkText2.test(text)) {
      uni.showToast({
        title: message,
        icon: "none"
      });
      return false;
    } else {
      return true;
    }
  }
  function login(data) {
    return http.post("login/login", data);
  }
  function register(data) {
    return http.post("login/register", data);
  }
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "login",
    setup(__props) {
      const { state, commit } = useStore();
      const name = vue.ref("");
      const password = vue.ref("");
      const goRegister = () => {
        goUrl("/pages/login/register");
      };
      const goLogin = () => {
        if (!checkNull(name.value, "\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A")) {
          return;
        }
        if (!checkStrEng(name.value, "\u8D26\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E")) {
          return;
        }
        if (!checkSymbol(name.value, "\u8D26\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u5305\u542B\u975E\u6CD5\u5B57\u7B26")) {
          return;
        }
        if (!checkNull(password.value, "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")) {
          return;
        }
        if (!checkPassword(password.value, "\u5BC6\u7801\u683C\u5F0F\u4E0D\u6B63\u786E")) {
          return;
        }
        let data = {
          name: name.value,
          password: password.value
        };
        login(data).then((res) => {
          if (res) {
            showInfo("\u767B\u5F55\u6210\u529F");
            commit("setUserInfo", res);
            uni.setStorage({
              key: "opentodo",
              data: res,
              success: () => {
                formatAppLog("log", "at pages/login/login.vue:87", "success");
              }
            });
            setTimeout(() => {
              goTabbarUrl("../index/index");
            }, 1500);
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createCommentVNode(" \u72B6\u6001\u680F "),
          vue.createVNode(StatusBar),
          vue.createCommentVNode(" \u767B\u5F55\u5185\u5BB9\u6846 "),
          vue.createElementVNode("view", { class: "login-box" }, [
            vue.createElementVNode("view", { class: "login-img" }, [
              vue.createElementVNode("image", {
                src: "/static/logo.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "login-input" }, [
              vue.createElementVNode("view", { class: "login-user" }, [
                vue.createElementVNode("view", { class: "login-text" }, " \u8D26\u53F7 "),
                vue.createElementVNode("view", { class: "login-username" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => name.value = $event),
                    maxlength: "12",
                    placeholder: "\u4E2D\u6587\u6216\u5B57\u6BCD\u6216\u4E2D\u6587+\u5B57\u6BCD"
                  }, null, 512), [
                    [vue.vModelText, name.value]
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "login-password" }, [
                vue.createElementVNode("view", { class: "login-text" }, " \u5BC6\u7801 "),
                vue.createElementVNode("view", { class: "login-username" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "password",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
                    placeholder: "8-16\u4F4D\u5B57\u6BCD+\u6570\u5B57+\u7279\u6B8A\u7B26\u53F7!@#$%"
                  }, null, 512), [
                    [vue.vModelText, password.value]
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "login-btn" }, [
              vue.createElementVNode("text", {
                onClick: _cache[2] || (_cache[2] = ($event) => goLogin())
              }, "\u7ACB\u5373\u767B\u5F55")
            ]),
            vue.createElementVNode("view", { class: "login-more" }, [
              vue.createElementVNode("text"),
              vue.createElementVNode("text", { onClick: goRegister }, "\u6CE8\u518C")
            ])
          ])
        ]);
      };
    }
  });
  var PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "E:/app/vue-app/openplanvue/pages/login/login.vue"]]);
  var _imports_0 = "/static/logo.png";
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "me",
    setup(__props) {
      vue.ref("");
      vue.ref("");
      const http2 = vue.ref("");
      vue.reactive({});
      const { state, commit } = useStore();
      const userInfo = state.userInfo;
      const onChangeTheme = () => {
        commit("changeTheme");
        uni.$emit("changeTheme");
      };
      const goSet = () => {
        uni.navigateTo({
          url: "/pages/set/set"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "me",
          style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
        }, [
          vue.createVNode(StatusBar, {
            bgColor: vue.unref(state).theme.appbgcolor
          }, null, 8, ["bgColor"]),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("view", { class: "header-logo" }, [
              vue.createElementVNode("view", { class: "logo" }, [
                vue.unref(userInfo).img ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: http2.value + vue.unref(userInfo).img,
                  mode: ""
                }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  src: _imports_0,
                  mode: ""
                })),
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, vue.toDisplayString(vue.unref(userInfo).name), 5)
              ])
            ])
          ]),
          vue.createElementVNode("view", {
            class: "view",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("view", { class: "view-item" }, [
              vue.createElementVNode("view", {
                class: "view-item-title",
                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
              }, vue.toDisplayString(vue.unref(state).data.add_day), 5),
              vue.createElementVNode("view", { class: "view-item-tip" }, " \u7D2F\u8BA1(\u5929) ")
            ]),
            vue.createElementVNode("view", { class: "view-item" }, [
              vue.createElementVNode("view", {
                class: "view-item-title",
                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
              }, vue.toDisplayString(vue.unref(state).data.total_number), 5),
              vue.createElementVNode("view", { class: "view-item-tip" }, " \u8BB0\u5F55(\u6B21) ")
            ]),
            vue.createElementVNode("view", { class: "view-item" }, [
              vue.createElementVNode("view", {
                class: "view-item-title",
                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
              }, vue.toDisplayString(vue.unref(state).data.finish_number), 5),
              vue.createElementVNode("view", { class: "view-item-tip" }, " \u5DF2\u5B8C\u6210 ")
            ])
          ], 4),
          vue.createCommentVNode(' <view class="list" :style="{background: state.theme.appboxcolor}">\r\n			<view class="list-item" @click="goHistory()">\r\n				<view class="item-left">\r\n					<text :style="{color:state.theme.fontcolordeep}">\u5386\u53F2\u8BB0\u5F55</text>\r\n				</view>\r\n				<view class="item-right">\r\n					<uni-icons color="#ccc" type="right" size="18"></uni-icons>\r\n				</view>\r\n			</view>\r\n		</view> '),
          vue.createElementVNode("view", {
            class: "list",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("view", {
              class: "list-item",
              onClick: _cache[0] || (_cache[0] = ($event) => onChangeTheme())
            }, [
              vue.createElementVNode("view", { class: "item-left" }, [
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, "\u4E3B\u9898", 4)
              ]),
              vue.createElementVNode("view", { class: "item-right" }, [
                vue.createVNode(_component_uni_icons, {
                  color: "#ccc",
                  type: "right",
                  size: "18"
                })
              ])
            ])
          ], 4),
          vue.createElementVNode("view", {
            class: "list",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("view", {
              class: "list-item",
              onClick: _cache[1] || (_cache[1] = ($event) => goSet())
            }, [
              vue.createElementVNode("view", { class: "item-left" }, [
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, "\u8BBE\u7F6E", 4)
              ]),
              vue.createElementVNode("view", { class: "item-right" }, [
                vue.createVNode(_component_uni_icons, {
                  color: "#ccc",
                  type: "right",
                  size: "18"
                })
              ])
            ])
          ], 4)
        ], 4);
      };
    }
  });
  var PagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-259fb574"], ["__file", "E:/app/vue-app/openplanvue/pages/me/me.vue"]]);
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "add",
    setup(__props) {
      const { state, commit } = useStore();
      const current = vue.ref(0);
      const startDate = date.getDate();
      const endDate = "2099-12-31";
      const time = vue.ref("\u9009\u62E9\u622A\u6B62\u65E5\u671F");
      const todo = vue.reactive({ content: "" });
      const todoColorIndex = vue.ref(0);
      const plan = vue.reactive({ name: "", other: "" });
      const planColorIndex = vue.ref(0);
      const colors = type;
      const changeTabs = (index) => {
        current.value = index;
      };
      const todoColorChange = (res) => {
        todoColorIndex.value = res.detail.value.id;
      };
      const planColorChange = (res) => {
        planColorIndex.value = res.detail.value.id;
      };
      const bindDateChange = (date2) => {
        time.value = date2.detail.value;
      };
      const save = () => {
        if (current.value == 0) {
          if (!checkNull(todo.content, "\u5F85\u529E\u4E0D\u80FD\u4E3A\u7A7A"))
            return false;
          if (!checkStrEngInt(todo.content, "\u5F85\u529E\u683C\u5F0F\u4E0D\u6B63\u786E"))
            return false;
          let data = __spreadProps(__spreadValues({}, todo), { type: todoColorIndex.value, uid: state.userInfo.id, create_time: date.getTime() });
          addTodo(data).then((res) => {
            let todoList = state.todo;
            todoList.unshift(__spreadProps(__spreadValues({}, data), { id: res.id, status: 0 }));
            commit("setTodo", todoList);
            showInfo("\u6DFB\u52A0\u6210\u529F");
            todo.content = "";
          });
        } else {
          if (time.value == "\u9009\u62E9\u622A\u6B62\u65E5\u671F") {
            showInfo("\u65E5\u671F\u672A\u9009\u62E9");
            return false;
          }
          if (!checkNull(plan.name, "\u8BA1\u5212\u540D\u4E0D\u80FD\u4E3A\u7A7A"))
            return false;
          if (!checkStrEngInt(plan.name, "\u8BA1\u5212\u540D\u683C\u5F0F\u4E0D\u6B63\u786E"))
            return false;
          if (!checkText(plan.other, "\u5907\u6CE8\u683C\u5F0F\u4E0D\u6B63\u786E"))
            return false;
          let data = __spreadProps(__spreadValues({}, plan), { type: planColorIndex.value, uid: state.userInfo.id, create_time: date.getTime(), end_time: `${time.value} 23:59:59` });
          addPlan(data).then((res) => {
            let planList = state.plan;
            planList.unshift(__spreadProps(__spreadValues({}, data), { id: res.id, status: 0, child: [] }));
            commit("setPlan", planList);
            showInfo("\u6DFB\u52A0\u6210\u529F");
            plan.name = "";
            plan.other = "";
            time.value = "\u9009\u62E9\u622A\u6B62\u65E5\u671F";
          });
        }
        updateTotal({
          uid: state.userInfo.id
        }).then((res) => {
          formatAppLog("log", "at pages/add/add.vue:163", "\u6DFB\u52A0\u6570\u636E\u6210\u529F");
        });
        const now = new Date(date.getDate()).valueOf();
        let old = new Date(state.data.last_time.substring(0, 10)).valueOf();
        if (!old) {
          getData({
            uid: state.userInfo.id
          }).then((result) => {
            old = result.last_time;
          });
        }
        if (now == old) {
          updateDay({
            uid: state.userInfo.id
          }).then((res) => {
            formatAppLog("log", "at pages/add/add.vue:180", "\u6DFB\u52A0\u6570\u636E\u6210\u529F");
          });
          let data = state.data;
          data.total_number = data.total_number + 1;
          commit("setData", data);
        } else {
          updateDay({
            uid: state.userInfo.id
          }).then((res) => {
            formatAppLog("log", "at pages/add/add.vue:189", "\u6DFB\u52A0\u6570\u636E\u6210\u529F");
          });
          updateTime({
            uid: state.userInfo.id,
            last_time: date.getTime()
          }).then((res) => {
            formatAppLog("log", "at pages/add/add.vue:195", "\u6DFB\u52A0\u66F4\u65B0\u6210\u529F");
          });
          let data = state.data;
          data.total_number = data.total_number + 1;
          data.add_day = data.add_day + 1;
          data.last_time = date.getTime();
          commit("setData", data);
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "add",
          style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
        }, [
          vue.createElementVNode("div", null, [
            vue.createVNode(StatusBar, {
              bgColor: vue.unref(state).theme.appbgcolor
            }, null, 8, ["bgColor"]),
            vue.createVNode(Header, {
              back: "",
              bgColor: vue.unref(state).theme.appbgcolor,
              fontColor: vue.unref(state).theme.fontcolordeep,
              onChangeTabs: changeTabs
            }, null, 8, ["bgColor", "fontColor"])
          ]),
          vue.withDirectives(vue.createElementVNode("div", {
            class: "add-box",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("div", { class: "add-box-input" }, [
              vue.createElementVNode("div", { class: "input" }, [
                vue.createCommentVNode(" <span>\u5F85\u529E\uFF1A</span> "),
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => todo.content = $event),
                  placeholder: "\u4E2D\u6587\u6216\u5B57\u6BCD\u6216\u6570\u5B57",
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, null, 4), [
                  [vue.vModelText, todo.content]
                ])
              ])
            ]),
            vue.createElementVNode("div", { class: "add-box-color" }, [
              vue.createElementVNode("div", {
                class: "add-box-color-title",
                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
              }, "\u7C7B\u578B", 4),
              vue.createElementVNode("radio-group", {
                class: "add-box-color-list",
                onChange: todoColorChange
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(colors), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "abcl-item"
                  }, [
                    vue.createElementVNode("view", { class: "abcl-item-container" }, [
                      vue.createElementVNode("view", { class: "abcl-item-container-content" }, [
                        vue.createElementVNode("view", {
                          style: vue.normalizeStyle({ background: item.color }),
                          class: "aicc-color"
                        }, null, 4),
                        vue.createElementVNode("view", {
                          class: "aicc-text",
                          style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow })
                        }, vue.toDisplayString(item.text), 5)
                      ]),
                      vue.createElementVNode("view", { class: "abcl-item-container-check" }, [
                        vue.createElementVNode("radio", {
                          value: item,
                          checked: index === todoColorIndex.value
                        }, null, 8, ["value", "checked"])
                      ])
                    ])
                  ]);
                }), 128))
              ], 32)
            ])
          ], 4), [
            [vue.vShow, current.value == 0]
          ]),
          vue.withDirectives(vue.createElementVNode("div", {
            class: "add-box",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("div", { class: "add-box-input" }, [
              vue.createElementVNode("div", { class: "input" }, [
                vue.createElementVNode("span", {
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, "\u540D\u5B57\uFF1A", 4),
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => plan.name = $event),
                  placeholder: "\u4E2D\u6587\u6216\u5B57\u6BCD\u6216\u6570\u5B57",
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, null, 4), [
                  [vue.vModelText, plan.name]
                ])
              ]),
              vue.createElementVNode("div", { class: "input" }, [
                vue.createElementVNode("span", {
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, "\u5907\u6CE8\uFF1A", 4),
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => plan.other = $event),
                  placeholder: "\u4E2D\u6587\u6216\u5B57\u6BCD\u6216\u6570\u5B57",
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, null, 4), [
                  [vue.vModelText, plan.other]
                ])
              ]),
              vue.createElementVNode("div", { class: "input" }, [
                vue.createElementVNode("span", {
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, "\u65E5\u671F\uFF1A", 4),
                vue.createElementVNode("picker", {
                  mode: "date",
                  fields: "day",
                  value: time.value,
                  start: vue.unref(startDate),
                  end: endDate,
                  onChange: bindDateChange
                }, [
                  vue.createElementVNode("view", {
                    class: "uni-input",
                    style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow })
                  }, vue.toDisplayString(time.value), 5)
                ], 40, ["value", "start"])
              ])
            ]),
            vue.createElementVNode("div", { class: "add-box-color" }, [
              vue.createElementVNode("div", {
                class: "add-box-color-title",
                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
              }, "\u7C7B\u578B\uFF1A", 4),
              vue.createElementVNode("radio-group", {
                class: "add-box-color-list",
                onChange: planColorChange
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(colors), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "abcl-item"
                  }, [
                    vue.createElementVNode("view", { class: "abcl-item-container" }, [
                      vue.createElementVNode("view", { class: "abcl-item-container-content" }, [
                        vue.createElementVNode("view", {
                          style: vue.normalizeStyle({ background: item.color }),
                          class: "aicc-color"
                        }, null, 4),
                        vue.createElementVNode("view", {
                          class: "aicc-text",
                          style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow })
                        }, vue.toDisplayString(item.text), 5)
                      ]),
                      vue.createElementVNode("view", { class: "abcl-item-container-check" }, [
                        vue.createElementVNode("radio", {
                          value: item,
                          checked: index === planColorIndex.value
                        }, null, 8, ["value", "checked"])
                      ])
                    ])
                  ]);
                }), 128))
              ], 32)
            ])
          ], 4), [
            [vue.vShow, current.value == 1]
          ]),
          vue.createElementVNode("div", {
            class: "add-btn",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
          }, [
            vue.createElementVNode("text", { onClick: save }, "\u63D0\u4EA4")
          ], 4)
        ], 4);
      };
    }
  });
  var PagesAddAdd = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-f869476c"], ["__file", "E:/app/vue-app/openplanvue/pages/add/add.vue"]]);
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "planitem",
    props: {
      data: { type: Array, required: false },
      success: { type: Number, required: true }
    },
    emits: ["changePlanItem", "removePlanItem"],
    setup(__props, { emit }) {
      const props = __props;
      const options = [
        {
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#fc5531"
          }
        }
      ];
      const { state } = useStore();
      const data = vue.ref(props.data);
      const planitem = vue.ref(data || []);
      const planSuccess = vue.ref(props.success || 0);
      vue.watch(props, (n, o) => {
        planitem.value = n.data;
        planSuccess.value = n.success;
      });
      const removePlanItem2 = (id, index) => {
        let data2 = {
          index,
          id
        };
        emit("removePlanItem", data2);
      };
      const changeSuccess = (index, id) => {
        let data2 = {
          index,
          id
        };
        emit("changePlanItem", data2);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "planitem" }, [
          vue.createElementVNode("ul", { class: "planitem-list" }, [
            planSuccess.value == 0 ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(planitem.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                class: "planitem-list-item",
                style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor, "border-left": `8rpx ${vue.unref(color)[item.type]} solid` })
              }, [
                vue.createVNode(UniSwipeAction, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(UniSwipeActionItem, {
                      style: { "border-radius": "8rpx" },
                      "right-options": options,
                      onClick: ($event) => removePlanItem2(item.id, index)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", { class: "planitem-list-item-wrapper" }, [
                          vue.createElementVNode("div", { class: "tlic-content" }, [
                            vue.createElementVNode("div", {
                              class: "tlic-content-title",
                              style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolordeep : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.name), 5),
                            item.other ? (vue.openBlock(), vue.createElementBlock("div", {
                              key: 0,
                              class: "tlic-content-other",
                              style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolorshallow : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.other), 5)) : vue.createCommentVNode("v-if", true),
                            vue.createElementVNode("div", {
                              class: "tlic-content-date",
                              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, [
                              vue.createElementVNode("span", null, vue.toDisplayString(item.create_time), 1)
                            ], 4)
                          ]),
                          vue.createElementVNode("div", { class: "tlic-check" }, [
                            item.status == 0 ? (vue.openBlock(), vue.createElementBlock("span", {
                              key: 0,
                              class: "tlic-check-defalut",
                              onClick: ($event) => changeSuccess(index, item.id)
                            }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("span", {
                              key: 1,
                              class: "tlic-check-success"
                            }, [
                              vue.createVNode(_component_uni_icons, {
                                color: vue.unref(state).theme.fontcolorshallow,
                                type: "checkbox-filled",
                                size: "28"
                              }, null, 8, ["color"])
                            ]))
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ], 4);
            }), 256)) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(planitem.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                class: "planitem-list-item",
                style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor, "border-left": `8rpx ${vue.unref(color)[item.type]} solid` })
              }, [
                vue.createVNode(UniSwipeAction, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(UniSwipeActionItem, {
                      style: { "border-radius": "8rpx" },
                      onClick: ($event) => removePlanItem2(item.id, index)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", { class: "planitem-list-item-wrapper" }, [
                          vue.createElementVNode("div", { class: "tlic-content" }, [
                            vue.createElementVNode("div", {
                              class: "tlic-content-title",
                              style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolordeep : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.name), 5),
                            item.other ? (vue.openBlock(), vue.createElementBlock("div", {
                              key: 0,
                              class: "tlic-content-other",
                              style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolorshallow : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.other), 5)) : vue.createCommentVNode("v-if", true),
                            vue.createElementVNode("div", {
                              class: "tlic-content-date",
                              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, [
                              vue.createElementVNode("span", null, vue.toDisplayString(item.create_time), 1)
                            ], 4)
                          ]),
                          vue.createElementVNode("div", { class: "tlic-check" }, [
                            item.status == 0 ? (vue.openBlock(), vue.createElementBlock("span", {
                              key: 0,
                              class: "tlic-check-defalut",
                              onClick: ($event) => changeSuccess(index, item.id)
                            }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("span", {
                              key: 1,
                              class: "tlic-check-success"
                            }, [
                              vue.createVNode(_component_uni_icons, {
                                color: vue.unref(state).theme.fontcolorshallow,
                                type: "checkbox-filled",
                                size: "28"
                              }, null, 8, ["color"])
                            ]))
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ], 4);
            }), 256))
          ])
        ]);
      };
    }
  });
  var PlanItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-0d2536fa"], ["__file", "E:/app/vue-app/openplanvue/components/home/planitem/planitem.vue"]]);
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "plan",
    setup(__props) {
      const { state, commit } = useStore();
      const planData = vue.ref({});
      const planIndex = vue.ref(0);
      const differDay = vue.ref(0);
      const differProgress = vue.ref(0);
      const changePlanItem = (res) => {
        let data = state.plan;
        finishPlanItem({
          uid: state.userInfo.id,
          id: res.id
        }).then((result) => {
          if (result) {
            data[planIndex.value].child[res.index].status = 1;
            let items = planData.value.child.length;
            let successMark = 0;
            let progress = 0;
            if (items > 0) {
              planData.value.child.forEach((item) => {
                if (item.status == 1) {
                  successMark += 1;
                }
              });
              if (successMark == 0) {
                progress = 0;
              } else {
                let number = Math.ceil(successMark / items * 100);
                progress = number;
              }
            } else {
              if (planData.status == 1) {
                progress = 100;
              } else {
                progress = 0;
              }
            }
            data[planIndex.value].progress = progress;
            commit("setPlan", data);
            showInfo("\u5DF2\u5B8C\u6210");
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      const deletePlanItem = (res) => {
        let data = state.plan;
        removePlanItem({
          uid: state.userInfo.id,
          id: res.id,
          status: data[planIndex.value].child[res.index].status
        }).then((result) => {
          if (result) {
            data[planIndex.value].child.splice(res.index, 1);
            let items = data[planIndex.value].child.length;
            let successMark = 0;
            let progress = 0;
            if (items > 0) {
              data[planIndex.value].child.forEach((item) => {
                if (item.status == 1) {
                  successMark += 1;
                }
              });
              if (successMark == 0) {
                progress = 0;
              } else {
                let number = Math.ceil(successMark / items * 100);
                formatAppLog("log", "at pages/plan/plan.vue:133", successMark / items);
                progress = number;
              }
            } else {
              if (planData.status == 1) {
                progress = 100;
              } else {
                progress = 0;
              }
            }
            data[planIndex.value].progress = progress;
            commit("setPlan", data);
            showInfo("\u5DF2\u5220\u9664");
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      onShow(() => {
        if (state.themeIndex == "linght") {
          uni.setNavigationBarColor({
            frontColor: "#000000"
          });
        } else {
          uni.setNavigationBarColor({
            frontColor: "#ffffff"
          });
        }
      });
      onLoad((option) => {
        planIndex.value = option.index;
        planData.value = state.plan[option.index];
        differDay.value = date.differDay(date.getTime(), planData.value.end_time);
        let differDate = date.differDay(planData.value.start_time, planData.value.end_time);
        if (differDay.value <= 0) {
          differProgress.value = 100;
        } else {
          differProgress.value = 100 - Math.ceil(differDay.value / differDate * 100);
        }
      });
      vue.watch(state, (n, o) => {
        let data = state.plan;
        let items = data[planIndex.value].child.length;
        let successMark = 0;
        let progress = 0;
        if (items > 0) {
          data[planIndex.value].child.forEach((item) => {
            if (item.status == 1) {
              successMark += 1;
            }
          });
          if (successMark == 0) {
            progress = 0;
          } else {
            let number = Math.ceil(successMark / items * 100);
            formatAppLog("log", "at pages/plan/plan.vue:195", successMark / items);
            progress = number;
          }
        } else {
          if (planData.status == 1) {
            progress = 100;
          } else {
            progress = 0;
          }
        }
        data[planIndex.value].progress = progress;
        commit("setPlan", data);
      });
      const goPlanItem = () => {
        uni.navigateTo({
          url: "/pages/planitem/planitem?index=" + planIndex.value
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "plan",
          style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor, paddingBottom: planData.value.status == 0 ? "130rpx" : "30rpx" })
        }, [
          vue.createElementVNode("div", { class: "plan-header" }, [
            vue.createVNode(StatusBar, {
              bgColor: vue.unref(state).theme.appbgcolor
            }, null, 8, ["bgColor"]),
            vue.createVNode(Header, {
              type: "title",
              title: "\u8BA1\u5212\u8BE6\u60C5",
              bgColor: vue.unref(state).theme.appbgcolor,
              fontColor: vue.unref(state).theme.fontcolordeep,
              onChangeTabs: _ctx.changeTabs
            }, null, 8, ["bgColor", "fontColor", "onChangeTabs"])
          ]),
          vue.createElementVNode("div", {
            class: "plan-info",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("view", {
              class: "plan-info-title",
              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
            }, vue.toDisplayString(planData.value.name), 5),
            vue.createElementVNode("view", {
              class: "plan-info-other",
              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow })
            }, [
              vue.createElementVNode("view", null, "\u5907\u6CE8\uFF1A"),
              vue.createElementVNode("view", null, vue.toDisplayString(planData.value.other), 1)
            ], 4)
          ], 4),
          vue.createElementVNode("div", {
            class: "plan-progress",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("view", {
              class: "plan-progress-title",
              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
            }, " \u8FDB\u5EA6 ", 4),
            vue.createElementVNode("view", { class: "plan-progress-info" }, [
              vue.createElementVNode("span", {
                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow })
              }, vue.toDisplayString(planData.value.progress == 100 ? "\u5DF2\u5B8C\u6210" : "\u5F85\u5B8C\u6210"), 5),
              vue.createElementVNode("span", null, "\u5DF2\u5B8C\u6210" + vue.toDisplayString(planData.value.progress) + "%", 1)
            ]),
            vue.createVNode(Progress, {
              value: planData.value.progress
            }, null, 8, ["value"])
          ], 4),
          vue.createElementVNode("div", {
            class: "plan-progress",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("view", {
              class: "plan-progress-title",
              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
            }, " \u65F6\u95F4 ", 4),
            vue.createElementVNode("view", { class: "plan-progress-info" }, [
              vue.createElementVNode("span", {
                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow })
              }, vue.toDisplayString(planData.value.create_time.substring(0, 10)) + "\u81F3" + vue.toDisplayString(planData.value.end_time.substring(0, 10)), 5),
              vue.createElementVNode("span", { style: { "background": "#eebe77" } }, "\u5269\u4F59" + vue.toDisplayString(differDay.value) + "\u5929", 1)
            ]),
            vue.createVNode(Progress, {
              bgColor: "#eebe77",
              value: differProgress.value
            }, null, 8, ["value"])
          ], 4),
          vue.createElementVNode("div", { class: "plan-title" }, [
            vue.createVNode(_component_uni_icons, {
              type: "list",
              size: "23",
              color: "#fc5531"
            }),
            vue.createElementVNode("span", {
              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
            }, "\u5B50\u8BA1\u5212", 4)
          ]),
          vue.createElementVNode("div", { class: "plan-content" }, [
            vue.createVNode(PlanItem, {
              data: planData.value.child,
              onChangePlanItem: changePlanItem,
              onRemovePlanItem: deletePlanItem,
              success: planData.value.status
            }, null, 8, ["data", "success"])
          ]),
          planData.value.status == 0 ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "plan-btn",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
          }, [
            vue.createElementVNode("text", { onClick: goPlanItem }, "\u6DFB\u52A0\u5B50\u8BA1\u5212")
          ], 4)) : vue.createCommentVNode("v-if", true)
        ], 4);
      };
    }
  });
  var PagesPlanPlan = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3bdd76a6"], ["__file", "E:/app/vue-app/openplanvue/pages/plan/plan.vue"]]);
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "planitem",
    setup(__props) {
      const { state, commit } = useStore();
      const planId = vue.ref(0);
      const planIndex = vue.ref(0);
      const planData = vue.ref({});
      const planItem = vue.reactive({ name: "", other: "" });
      const save = () => {
        let data = __spreadProps(__spreadValues({}, planItem), { item_id: planId.value, uid: state.userInfo.id, create_time: date.getTime() });
        addTask(data).then((res) => {
          showInfo("\u6DFB\u52A0\u6210\u529F");
          let plan = state.plan;
          plan[planIndex.value].child.unshift(__spreadProps(__spreadValues({}, data), { id: res.id, status: 0 }));
          commit("setPlan", plan);
          uni.navigateBack();
        });
      };
      onLoad((option) => {
        planIndex.value = option.index;
        planData.value = state.plan[option.index];
        planId.value = planData.value.id;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "add",
          style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
        }, [
          vue.createElementVNode("div", null, [
            vue.createVNode(StatusBar, {
              bgColor: vue.unref(state).theme.appbgcolor
            }, null, 8, ["bgColor"]),
            vue.createVNode(Header, {
              type: "title",
              title: "\u6DFB\u52A0\u5B50\u4EFB\u52A1",
              bgColor: vue.unref(state).theme.appbgcolor,
              fontColor: vue.unref(state).theme.fontcolordeep,
              onChangeTabs: _ctx.changeTabs
            }, null, 8, ["bgColor", "fontColor", "onChangeTabs"])
          ]),
          vue.createElementVNode("div", {
            class: "add-box",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
          }, [
            vue.createElementVNode("div", { class: "add-box-input" }, [
              vue.createElementVNode("div", { class: "input" }, [
                vue.createCommentVNode(" <span>\u5F85\u529E\uFF1A</span> "),
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => planItem.name = $event),
                  placeholder: "\u8F93\u5165\u5B50\u4EFB\u52A1",
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, null, 4), [
                  [vue.vModelText, planItem.name]
                ])
              ]),
              vue.createElementVNode("div", { class: "input" }, [
                vue.createCommentVNode(" <span>\u5F85\u529E\uFF1A</span> "),
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => planItem.other = $event),
                  placeholder: "\u5907\u6CE8",
                  style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                }, null, 4), [
                  [vue.vModelText, planItem.other]
                ])
              ])
            ])
          ], 4),
          vue.createElementVNode("div", {
            class: "add-btn",
            style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
          }, [
            vue.createElementVNode("text", { onClick: save }, "\u63D0\u4EA4")
          ], 4)
        ], 4);
      };
    }
  });
  var PagesPlanitemPlanitem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e80d6bf4"], ["__file", "E:/app/vue-app/openplanvue/pages/planitem/planitem.vue"]]);
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "register",
    setup(__props) {
      const name = vue.ref("");
      const password = vue.ref("");
      const goRegister = () => {
        if (!checkNull(name.value, "\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A")) {
          return;
        }
        if (!checkStrEngInt(name.value, "\u8D26\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E")) {
          return;
        }
        if (!checkNull(password.value, "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")) {
          return;
        }
        if (!checkPassword(password.value, "\u5BC6\u7801\u683C\u5F0F\u4E0D\u6B63\u786E")) {
          return;
        }
        let data = {
          name: name.value,
          password: password.value
        };
        register(data).then((res) => {
          formatAppLog("log", "at pages/login/register.vue:71", res);
        });
      };
      const goBack = () => {
        goReturn();
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createCommentVNode(" \u72B6\u6001\u680F "),
          vue.createVNode(StatusBar),
          vue.createElementVNode("view", { class: "back" }, [
            vue.createVNode(_component_uni_icons, {
              class: "icon",
              type: "left",
              size: "23",
              onClick: _cache[0] || (_cache[0] = ($event) => goBack())
            })
          ]),
          vue.createCommentVNode(" \u767B\u5F55\u5185\u5BB9\u6846 "),
          vue.createElementVNode("view", { class: "login-box" }, [
            vue.createElementVNode("view", { class: "login-img" }, [
              vue.createElementVNode("image", {
                src: "/static/logo.png",
                mode: ""
              }),
              vue.createElementVNode("view", { class: "login-appname" }, [
                vue.createElementVNode("text", null, "opentodo\u6B22\u8FCE\u60A8"),
                vue.createElementVNode("text", { class: "small-text" }, "\u73CD\u60DC\u6BCF\u4E00\u6B21\u76F8\u9047")
              ])
            ]),
            vue.createElementVNode("view", { class: "login-input" }, [
              vue.createElementVNode("view", { class: "login-user" }, [
                vue.createElementVNode("view", { class: "login-text" }, " \u8D26\u53F7 "),
                vue.createElementVNode("view", { class: "login-username" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => name.value = $event),
                    placeholder: "\u4E2D\u6587\u6216\u5B57\u6BCD\u6216\u4E2D\u6587+\u5B57\u6BCD"
                  }, null, 512), [
                    [vue.vModelText, name.value]
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "login-user" }, [
                vue.createElementVNode("view", { class: "login-text" }, " \u5BC6\u7801 "),
                vue.createElementVNode("view", { class: "login-username" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "password",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event),
                    placeholder: "8-16\u4F4D\u5B57\u6BCD+\u6570\u5B57+\u7279\u6B8A\u7B26\u53F7!@#$%"
                  }, null, 512), [
                    [vue.vModelText, password.value]
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              class: "login-btn",
              onClick: _cache[3] || (_cache[3] = ($event) => goRegister())
            }, [
              vue.createElementVNode("text", null, "\u7ACB\u5373\u6CE8\u518C")
            ])
          ])
        ]);
      };
    }
  });
  var PagesLoginRegister = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-24dc7ac2"], ["__file", "E:/app/vue-app/openplanvue/pages/login/register.vue"]]);
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "todo",
    props: {
      data: { type: Array, required: false }
    },
    emits: ["changeTodo", "removeTodo"],
    setup(__props, { emit }) {
      const props = __props;
      const { state } = useStore();
      const { data } = vue.reactive(props);
      const todo = vue.ref(data || []);
      vue.watch(props, (n, o) => {
        todo.value = n.data;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "todo" }, [
          vue.createElementVNode("ul", { class: "todo-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(todo.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                class: "todo-list-item",
                style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
              }, [
                vue.createElementVNode("div", { class: "todo-list-item-wrapper" }, [
                  vue.createElementVNode("div", { class: "tlic-content" }, [
                    vue.createElementVNode("div", {
                      class: "tlic-content-title",
                      style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep })
                    }, vue.toDisplayString(item.content), 5),
                    vue.createElementVNode("div", {
                      class: "tlic-content-date",
                      style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow })
                    }, [
                      vue.createElementVNode("span", null, "\u521B\u5EFA\uFF1A" + vue.toDisplayString(item.create_time.substring(0, 10)), 1),
                      vue.createElementVNode("span", {
                        style: vue.normalizeStyle({ color: item.status == 0 ? "#fc5531" : "#95d475" })
                      }, "\u7C7B\u578B\uFF1A" + vue.toDisplayString(item.status == 0 ? "\u672A\u5B8C\u6210" : "\u5DF2\u5B8C\u6210"), 5),
                      vue.createElementVNode("span", {
                        style: vue.normalizeStyle({ color: item.status > 1 ? "#fc5531" : "#95d475" })
                      }, "\u72B6\u6001\uFF1A" + vue.toDisplayString(item.status > 1 ? "\u5DF2\u5220\u9664" : "\u672A\u5220\u9664"), 5)
                    ], 4)
                  ])
                ])
              ], 4);
            }), 256))
          ])
        ]);
      };
    }
  });
  var Todo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1ab8a9ee"], ["__file", "E:/app/vue-app/openplanvue/components/history/todo/todo.vue"]]);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "plan",
    props: {
      data: { type: Array, required: false }
    },
    emits: ["changePlan", "removePlan"],
    setup(__props, { emit }) {
      const props = __props;
      formatAppLog("log", "at components/history/plan/plan.vue:54", color[0]);
      const options = [
        {
          text: "\u5B8C\u6210",
          style: {
            backgroundColor: "#67C23A"
          }
        },
        {
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#fc5531"
          }
        }
      ];
      const optionStatus = [
        {
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#fc5531"
          }
        }
      ];
      const plan = vue.ref(props.data || []);
      vue.onMounted(() => {
        plan.value.forEach((item) => {
          item.progress = progress(item);
          item.differDate = date.differDay(date.getTime(), item.end_time);
        });
        formatAppLog("log", "at components/history/plan/plan.vue:90", plan.value);
      });
      vue.watch(props, (n, o) => {
        plan.value = n.data;
      });
      const { state } = useStore();
      const changeDefault = (e, id, index) => {
        let data = {
          id,
          index
        };
        if (e.index == 0) {
          emit("changePlan", data);
        } else {
          emit("removePlan", data);
        }
      };
      const changeSuccess = (e, id, index) => {
        let data = {
          id,
          index
        };
        emit("removePlan", data);
      };
      const goPlan = (index) => {
        uni.navigateTo({
          url: "/pages/plan/plan?index=" + index
        });
      };
      const progress = (item) => {
        let items = item.child.length;
        let successMark = 0;
        let progress2 = 0;
        if (items > 0) {
          item.child.forEach((item2) => {
            if (item2.status == 1) {
              successMark += 1;
            }
          });
          if (successMark == 0) {
            progress2 = 0;
          } else {
            let number = Math.ceil(successMark / items * 100);
            progress2 = number;
          }
        } else {
          if (plan.value.status == 1) {
            progress2 = 100;
          } else {
            progress2 = 0;
          }
        }
        return progress2;
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "plan" }, [
          vue.createElementVNode("ul", { class: "plan-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(plan.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                class: "plan-list-item",
                style: vue.normalizeStyle({ borderLeft: `8rpx ${vue.unref(color)[item.type]} solid` })
              }, [
                item.status == 0 ? (vue.openBlock(), vue.createBlock(UniSwipeAction, { key: 0 }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(UniSwipeActionItem, {
                      style: { "border-radius": "0 8rpx 8rpx 0" },
                      "right-options": options,
                      onClick: ($event) => changeDefault($event, item.id, index)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", {
                          class: "plan-list-item-wrapper",
                          style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
                        }, [
                          vue.createElementVNode("div", {
                            class: "plic-content",
                            onClick: ($event) => goPlan(index)
                          }, [
                            vue.createElementVNode("div", {
                              class: "plic-content-title",
                              style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolordeep, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.name), 5),
                            vue.createElementVNode("div", { class: "plic-content-date" }, [
                              vue.createElementVNode("span", {
                                style: vue.normalizeStyle({ color: vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                              }, vue.toDisplayString(item.create_time.substring(0, 10)) + " \u81F3 " + vue.toDisplayString(item.end_time.substring(0, 10)), 5),
                              item.status == 0 ? (vue.openBlock(), vue.createElementBlock("span", { key: 0 }, "\u5269\u4E0B" + vue.toDisplayString(item.differDate) + "\u5929", 1)) : vue.createCommentVNode("v-if", true)
                            ])
                          ], 8, ["onClick"]),
                          vue.createElementVNode("div", { class: "plic-check" }, [
                            vue.createVNode(Progress, {
                              type: "",
                              color: vue.unref(state).theme.fontcolordeep,
                              value: item.progress
                            }, null, 8, ["color", "value"])
                          ])
                        ], 4)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : (vue.openBlock(), vue.createBlock(UniSwipeAction, { key: 1 }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(UniSwipeActionItem, {
                      style: { "border-radius": "0 8rpx 8rpx 0" },
                      "right-options": optionStatus,
                      onClick: ($event) => changeSuccess($event, item.id, index)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("div", {
                          class: "plan-list-item-wrapper",
                          style: vue.normalizeStyle({ background: vue.unref(state).theme.appboxcolor })
                        }, [
                          vue.createElementVNode("div", {
                            class: "plic-content",
                            onClick: ($event) => goPlan(index)
                          }, [
                            vue.createElementVNode("div", {
                              class: "plic-content-title",
                              style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolordeep : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                            }, vue.toDisplayString(item.name), 5),
                            vue.createElementVNode("div", { class: "plic-content-date" }, [
                              vue.createElementVNode("span", {
                                style: vue.normalizeStyle({ color: item.status == 0 ? vue.unref(state).theme.fontcolordeep : vue.unref(state).theme.fontcolorshallow, textDecoration: item.status == 1 ? "line-through" : "" })
                              }, vue.toDisplayString(item.create_time.substring(0, 10)) + " \u81F3 " + vue.toDisplayString(item.end_time.substring(0, 10)), 5),
                              item.status == 0 ? (vue.openBlock(), vue.createElementBlock("span", { key: 0 }, "\u5269\u4E0B" + vue.toDisplayString(item.differDate) + "\u5929", 1)) : vue.createCommentVNode("v-if", true)
                            ])
                          ], 8, ["onClick"]),
                          vue.createElementVNode("div", { class: "plic-check" }, [
                            item.status == 0 ? (vue.openBlock(), vue.createBlock(Progress, {
                              key: 0,
                              type: "",
                              color: vue.unref(state).theme.fontcolordeep,
                              value: item.progress
                            }, null, 8, ["color", "value"])) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                              key: 1,
                              type: "checkbox-filled",
                              size: "30",
                              color: vue.unref(state).theme.fontcolorshallow
                            }, null, 8, ["color"]))
                          ])
                        ], 4)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024))
              ], 4);
            }), 256))
          ])
        ]);
      };
    }
  });
  var Plan = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2b2710e9"], ["__file", "E:/app/vue-app/openplanvue/components/history/plan/plan.vue"]]);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "history",
    setup(__props) {
      const current = vue.ref(0);
      const { state, commit } = useStore();
      const todo = vue.ref([]);
      const plan = vue.ref([]);
      const changeTabs = (index) => {
        current.value = index;
      };
      const changeTodo = (data) => {
        finishTodo({
          uid: state.userInfo.id,
          id: data.id
        }).then((res) => {
          if (res) {
            updateFinish({
              uid: state.userInfo.id
            }).then((res2) => {
              formatAppLog("log", "at pages/history/history.vue:52", "\u66F4\u65B0\u6210\u529F");
            });
            let todo2 = state.todo;
            todo2[data.index].status = 1;
            showInfo("\u5DF2\u5B8C\u6210");
            commit("setTodo", todo2);
            let datas = state.data;
            datas.finish_number = datas.finish_number + 1;
            commit("setData", datas);
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      const deleteTodo = (data) => {
        let todo2 = state.todo;
        removeTodo({
          uid: state.userInfo.id,
          id: data.id,
          status: todo2[data.index].status
        }).then((res) => {
          if (res) {
            todo2.splice(data.index, 1);
            showInfo("\u5220\u9664\u6210\u529F");
            commit("setTodo", todo2);
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      const changePlan = (res) => {
        finishPlan({
          uid: state.userInfo.id,
          id: res.id
        }).then((data) => {
          if (data) {
            updateFinish({
              uid: state.userInfo.id
            }).then((res2) => {
              formatAppLog("log", "at pages/history/history.vue:92", "\u66F4\u65B0\u6210\u529F");
            });
            let plan2 = state.plan;
            plan2[res.index].status = 1;
            plan2[res.index].progress = 100;
            plan2[res.index].child.forEach((item) => {
              item.status = 1;
            });
            commit("setPlan", plan2);
            showInfo("\u5DF2\u5B8C\u6210");
            let datas = state.data;
            datas.finish_number = datas.finish_number + 1;
            commit("setData", datas);
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      const deletePlan = (res) => {
        let plan2 = state.plan;
        removePlan({
          uid: state.userInfo.id,
          id: res.id,
          status: plan2[res.index].status
        }).then((res2) => {
          if (res2) {
            plan2.splice(res2.index, 1);
            showInfo("\u5220\u9664\u6210\u529F");
            commit("setPlan", plan2);
          } else {
            showInfo("\u7F51\u7EDC\u9519\u8BEF");
          }
        });
      };
      vue.onMounted(() => {
        if (state.todo.length == 0) {
          getTodoList({
            uid: state.userInfo.id
          }).then((res) => {
            if (res) {
              const result = res;
              commit("setTodo", result);
              todo.value = state.todo;
            }
          });
        }
        todo.value = state.todo;
        if (state.plan.length == 0) {
          getPlan({
            uid: state.userInfo.id
          }).then((res) => {
            if (res) {
              const result = res;
              result.forEach((item) => {
                item.progress = 0;
                item.differDate = 0;
              });
              commit("setPlan", result);
              plan.value = state.plan;
            }
          });
        }
        plan.value = state.plan;
        formatAppLog("log", "at pages/history/history.vue:160", plan.value);
      });
      onShow(() => {
        if (state.themeIndex == "linght") {
          uni.setNavigationBarColor({
            frontColor: "#000000"
          });
        } else {
          uni.setNavigationBarColor({
            frontColor: "#ffffff"
          });
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "index",
          style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
        }, [
          vue.createElementVNode("div", { class: "index-header" }, [
            vue.createVNode(StatusBar, {
              bgColor: vue.unref(state).theme.appbgcolor
            }, null, 8, ["bgColor"]),
            vue.createVNode(Header, {
              back: "",
              type: "tabs",
              bgColor: vue.unref(state).theme.appbgcolor,
              fontColor: vue.unref(state).theme.fontcolordeep,
              onChangeTabs: changeTabs
            }, null, 8, ["bgColor", "fontColor"])
          ]),
          vue.createElementVNode("div", { class: "index-content" }, [
            current.value == 0 ? (vue.openBlock(), vue.createElementBlock("div", { key: 0 }, [
              vue.createVNode(Todo, {
                data: todo.value,
                onChangeTodo: changeTodo,
                onRemoveTodo: deleteTodo
              }, null, 8, ["data"])
            ])) : vue.createCommentVNode("v-if", true),
            current.value == 1 ? (vue.openBlock(), vue.createElementBlock("div", { key: 1 }, [
              vue.createVNode(Plan, {
                data: plan.value,
                onChangePlan: changePlan,
                onRemovePlan: deletePlan
              }, null, 8, ["data"])
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ], 4);
      };
    }
  });
  var PagesHistoryHistory = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "E:/app/vue-app/openplanvue/pages/history/history.vue"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "set",
    setup(__props) {
      const { state, commit } = useStore();
      const outLogin = () => {
        uni.removeStorage({
          key: "opentodo",
          success: function(res) {
            formatAppLog("log", "at pages/set/set.vue:23", "success");
          }
        });
        commit("setUserInfo", {});
        showInfo("\u9000\u51FA\u6210\u529F");
        goUrl("/pages/login/login");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "set",
          style: vue.normalizeStyle({ background: vue.unref(state).theme.appbgcolor })
        }, [
          vue.createElementVNode("view", { class: "set-header" }, [
            vue.createVNode(StatusBar, {
              bgColor: vue.unref(state).theme.appbgcolor
            }, null, 8, ["bgColor"]),
            vue.createVNode(Header, {
              type: "title",
              title: "\u8BBE\u7F6E",
              bgColor: vue.unref(state).theme.appbgcolor,
              fontColor: vue.unref(state).theme.fontcolordeep
            }, null, 8, ["bgColor", "fontColor"])
          ]),
          vue.createElementVNode("view", {
            class: "out-login",
            onClick: outLogin
          }, " \u9000\u51FA\u767B\u5F55 ")
        ], 4);
      };
    }
  });
  var PagesSetSet = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-21926b68"], ["__file", "E:/app/vue-app/openplanvue/pages/set/set.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/me/me", PagesMeMe);
  __definePage("pages/add/add", PagesAddAdd);
  __definePage("pages/plan/plan", PagesPlanPlan);
  __definePage("pages/planitem/planitem", PagesPlanitemPlanitem);
  __definePage("pages/login/register", PagesLoginRegister);
  __definePage("pages/history/history", PagesHistoryHistory);
  __definePage("pages/set/set", PagesSetSet);
  const __default__ = {
    onLaunch: function() {
      uni.onTabBarMidButtonTap(() => {
        uni.navigateTo({
          url: "/pages/add/add",
          animationType: "slide-in-bottom"
        });
      });
      const that = this;
      uni.getStorage({
        key: "opentodo",
        success: function(res) {
          if (res.data.id) {
            that.$store.commit("setUserInfo", res.data);
            uni.navigateTo({
              url: "/pages/index/index"
            });
          } else {
            uni.navigateTo({
              url: "/pages/login/login"
            });
          }
        },
        fail: (res) => {
          uni.navigateTo({
            url: "/pages/login/login"
          });
        }
      });
      uni.onNetworkStatusChange(function(res) {
        if (res.networkType == "none") {
          showInfo("\u7F51\u7EDC\u4E0D\u7ED9\u529B~");
        }
      });
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:40", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:43", "App Hide");
    }
  };
  const __injectCSSVars__ = () => {
    vue.useCssVars((_ctx) => ({
      "472cff63-theme": _ctx.theme
    }));
  };
  const __setup__ = __default__.setup;
  __default__.setup = __setup__ ? (props, ctx) => {
    __injectCSSVars__();
    return __setup__(props, ctx);
  } : __injectCSSVars__;
  const _sfc_main = __default__;
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/app/vue-app/openplanvue/App.vue"]]);
  const themes = {
    linght: {
      appcolor: "#FC5531",
      appbgcolor: "#EDEDED",
      appboxcolor: "#FFF",
      fontcolorbase: "#555",
      fontcolorshallow: "#aaa",
      fontcolordeep: "#333",
      fontsizesmall: "13px",
      fontsizebase: "15px",
      fontsizelg: "17px"
    },
    draw: {
      appcolor: "#FC5531",
      appbgcolor: "#111",
      appboxcolor: "#282828",
      fontcolorbase: "#555",
      fontcolorshallow: "#aaa",
      fontcolordeep: "#fff",
      fontsizesmall: "13px",
      fontsizebase: "15px",
      fontsizelg: "17px"
    }
  };
  const store = createStore({
    state: {
      themeIndex: "linght",
      theme: themes.linght,
      userInfo: {
        id: 1,
        name: "lkjlkj",
        img: ""
      },
      todo: [],
      plan: [],
      data: {
        add_day: 0,
        finish_number: 0,
        total_number: 0,
        last_time: ""
      }
    },
    mutations: {
      changeTheme(state) {
        if (state.themeIndex == "linght") {
          state.theme = themes.draw;
          state.themeIndex = "draw";
          uni.setNavigationBarColor({
            frontColor: "#ffffff"
          });
          uni.setTabBarStyle({
            backgroundColor: "#000000",
            borderStyle: "white"
          });
        } else {
          state.theme = themes.linght;
          state.themeIndex = "linght";
          uni.setNavigationBarColor({
            frontColor: "#000000"
          });
          uni.setTabBarStyle({
            backgroundColor: "#ffffff",
            borderStyle: "black"
          });
        }
      },
      setUserInfo(state, data) {
        state.userInfo = data;
      },
      setTodo(state, data) {
        state.todo = data;
      },
      setPlan(state, data) {
        state.plan = data;
      },
      setData(state, data) {
        state.data = data;
      }
    }
  });
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
