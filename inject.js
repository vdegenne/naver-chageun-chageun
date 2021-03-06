/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} filePath Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 */
function injectScript(filePath, tag) {
  const node = document.getElementsByTagName(tag)[0];
  const script = document.createElement('script');
  script.type = 'module'
  // script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', filePath);
  node.appendChild(script);
}

injectScript(chrome.extension.getURL('content.js'), 'body');