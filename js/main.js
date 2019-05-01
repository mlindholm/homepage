var links = document.links

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
  const color = getComputedStyle(links[i], null).getPropertyValue('color').toString()
  if (links[i].hostname != window.location.hostname && !links[i].href.match(/^mailto\:/)) {
    links[i].target = '_blank'
    links[i].rel = 'noopener'
  }
}
