import { defineComponent as s, openBlock as c, createElementBlock as a, toDisplayString as d } from "vue";
const p = s({
  name: "CustomNode",
  props: {
    node: {
      type: Object,
      required: !0
    }
  }
}), _ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
}, i = { class: "custom-node" };
function u(e, t, o, n, r, m) {
  return c(), a("div", i, d(e.node.data), 1);
}
const l = /* @__PURE__ */ _(p, [["render", u]]);
export {
  l as default
};
