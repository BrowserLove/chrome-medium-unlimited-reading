var getMemberPreviewNotice = function() {
  var previewNotice = $('main + aside:contains("You read a lot")');

  if(previewNotice.length == 0) {
    previewNotice = $('main footer:contains("You read a lot")');
  }

  return previewNotice;
}

var isMemberPreview = function() {
  var previewNotice = getMemberPreviewNotice();

  return previewNotice.length > 0
};

var fetchMemberContent = () => fetch(document.location)
  .then(response => response.text())
  .then(html => $(html).find('main').html())
  .then(newContent => $('main').html(newContent));

$(document).ready(function(){
  console.log(isMemberPreview())
  if(isMemberPreview()) {
    fetchMemberContent().then($('main + aside').hide());
  }
})
