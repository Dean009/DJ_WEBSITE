export function wrapGWx(element) {
  if (!element) return;

  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const val = node.nodeValue;
    if (!val || !val.includes("GWx")) return;

    const frag = document.createDocumentFragment();
    const parts = val.split(/(GWx)/g);

    parts.forEach((part) => {
      if (!part) return;
      if (part === "GWx") {
        const span = document.createElement("span");
        span.className = "wf-word gwx-pop";
        span.textContent = "GWx";
        frag.appendChild(span);
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });

    node.parentNode.replaceChild(frag, node);
  });
}
