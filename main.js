var getMemberPreviewNotice = function(selector) {
  return $('div.ui-caption:contains("Member preview")');
}

var isMemberPreview = function() {
  return getMemberPreviewNotice().length > 0
};

var fetchMemberContent = () => fetch(document.location)
  .then(response => response.text())
  .then(html => $(html).find('main').html())
  .then(newContent => $('main').html(newContent));

$(document).ready(function(){
  if(isMemberPreview()) {
    fetchMemberContent().then(() => getMemberPreviewNotice().hide());
  }
})
