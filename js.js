function OpenTarget(search_link) {
  if (search_link != "default") {
    popupWin = window.open(search_link, 'open_window', 'menubar, toolbar, location, directories, status, scrollbars, resizable, dependent, width=800, height=600, left=0, top=0')
  }
}

function jsDropDown(selectedsource) {
  queryinput = document.getElementById("query");
  if (selectedsource == "agora") {
    queryinput.placeholder = "Agriculture research";

  }
  if (selectedsource == "ardi") {
    queryinput.placeholder = "Research for Development and Innovation";
  }
  if (selectedsource == "cambridge") {
    queryinput.placeholder = "Cambridge University Press's journals";
  }
  if (selectedsource == "galeacademicof") {
    queryinput.placeholder = "Full-text articles from academic journals";
  }
  if (selectedsource == "dg") {
    queryinput.placeholder = "Learn about internet-related topics";
  }
  if (selectedsource == "gale") {
    queryinput.placeholder = "Full-text articles from academic journals";
  }
  if (selectedsource == "galeresearch") {
    queryinput.placeholder = "Full-text articles from academic journals";
  }
  if (selectedsource == "goali") {
    queryinput.placeholder = "Global Online Access to Legal Information";
  }
  if (selectedsource == "hein") {
    queryinput.placeholder = "Image-Based Legal Research Database";
  }
  if (selectedsource == "hinari") {
    queryinput.placeholder = "The Health InterNetwork Access";
  }
  if (selectedsource == "jstor") {
    queryinput.placeholder = "Research in social sciences, economics";
  }
  if (selectedsource == "oare") {
    queryinput.placeholder = "Environment research";
  }
  if (selectedsource == "pressreader") {
    queryinput.placeholder = "International newspapers and magazines";
  }
  if (selectedsource == "scopus") {
    queryinput.placeholder = "Abstract and citation database";
  }
  if (selectedsource == "wos") {
    queryinput.placeholder = "Scientific citation indexing service";
  }
}

function searchPlus(sform) {
  var searchTerm = document.sform.query.value;
  searchTerm = encodeURIComponent(searchTerm);
  source_selected = document.sform.SearchSource.value;

  switch (source_selected) {
    case "galeacademicof":
      var basic_url = "http://go.galegroup.com.vlib.interchange.at/ps/basicSearch.do?inputFieldValues%5B0%5D=";
      var search_url = basic_url + searchTerm + "&inputFieldNames%5B0%5D=OQE&nwf=y&searchType=BasicSearchForm&userGroupName=wash89460&prodId=AONE&spellCheck=true&method=doSearch&dblist=&limiterFieldValues%5BAC%5D=y&_limiterFieldValues%5BAC%5D=on&_limiterFieldValues%5BRE%5D=on&standAloneLimiters=LI&_limiterFieldValues%5BLI%5D=on";
      OpenTarget(search_url);
      break;

    case "agora":
      var basic_url = "http://hinari.summon.serialssolutions.com/#!/search?ho=t&l=en&q=";
      var search_url = basic_url + searchTerm;
      OpenTarget(search_url);
      break;

    case "ardi":
      var basic_url = "http://hinari.summon.serialssolutions.com/#!/search?ho=t&l=en&q=";
      var search_url = basic_url + searchTerm;
      OpenTarget(search_url);
      break;

    case "cambridge":
      var basic_url = "https://www.cambridge.org/core/search?q=";
      var search_url = basic_url + searchTerm + "&_csrf=6DvdxaM5-p-ZayHlQVRUZqWxrOPh31mxsDlw";
      OpenTarget(search_url);
      break;

    case "dg":
      var basic_url = "http://digitalliteracy.rosendigital.com.vlib.interchange.at/search?q=";
      var search_url = basic_url + searchTerm + "&s=GO";
      OpenTarget(search_url);
      break;

    case "gale":
      var basic_url = "http://go.galegroup.com.vlib.interchange.at/ps/headerQuickSearch.do?quickSearchTerm=";
      var search_url = basic_url + searchTerm + "&inputFieldNames%5B0%5D=OQE&searchType=BasicSearchForm&userGroupName=wash89460&nwf=y&prodId=OVIC&stw.option=&ebook=&quicksearchIndex=OQE&spellCheck=true&hasCoProduct=false";
      OpenTarget(search_url);
      break;

    case "galeresearch":
      var basic_url = "http://go.galegroup.com.vlib.interchange.at/ps/headerQuickSearch.do?quickSearchTerm=";
      var search_url = basic_url + searchTerm + "&inputFieldNames%5B0%5D=OQE&searchType=BasicSearchForm&userGroupName=wash89460&nwf=y&prodId=MSIC&stw.option=&ebook=&quicksearchIndex=OQE&spellCheck=true&hasCoProduct=false";
      OpenTarget(search_url);
      break;

    case "goali":
      var basic_url = "http://login.research4life.org/tacsgr0hinari_summon_serialssolutions_com/#!/search?ho=t&l=en&q=";
      var search_url = basic_url + searchTerm;
      OpenTarget(search_url);
      break;

    case "hein":
      var basic_url = "https://heinonline.org/HOL/LuceneSearch?terms=";
      var search_url = basic_url + searchTerm + "&collection=all&searchtype=advanced&typea=text&tabfrom=&submit=Go&all=true";
      OpenTarget(search_url);
      break;

    case "hinari":
      var basic_url = "http://login.research4life.org/tacsgr0hinari_summon_serialssolutions_com/#!/search?ho=t&l=en&q=";
      var search_url = basic_url + searchTerm;
      OpenTarget(search_url);
      break;

    case "jstor":
      var basic_url = "https://www.jstor.org.vlib.interchange.at/action/doBasicSearch?Query=";
      var search_url = basic_url + searchTerm + "&acc=on&wc=on&fc=off&group=none";
      OpenTarget(search_url);
      break;

    case "oare":
      var basic_url = "http://login.research4life.org/tacsgr0hinari_summon_serialssolutions_com/#!/search?ho=t&l=en&q=";
      var search_url = basic_url + searchTerm;
      OpenTarget(search_url);
      break;

    case "pressreader":
      var basic_url = "https://www.pressreader.com.vlib.interchange.at/search?query=";
      var search_url = basic_url + searchTerm + "&languages=ru&groupBy=Language&hideSimilar=0&hideSnippets=0&type=0&state=0";
      OpenTarget(search_url);
      break;

    case "scopus":
      var basic_url = "https://www.scopus.com/results/results.uri?numberOfFields=0&src=s&clickedLink=&edit=&editSaveSearch=&origin=searchbasic&authorTab=&affiliationTab=&advancedTab=&scint=1&menu=search&tablin=&searchterm1=";
      var search_url = basic_url + searchTerm + "&field1=TITLE_ABS_KEY&dateType=Publication_Date_Type&yearFrom=Before+1960&yearTo=Present&loadDate=7&documenttype=All&accessTypes=All&resetFormLink=&st1=" + searchTerm +"&st2=&sot=b&sdt=b&sl=19&s=TITLE-ABS-KEY%28" + searchTerm + "%29&sid=398c5c083198e0b88a7ff92f7c49d533&searchId=398c5c083198e0b88a7ff92f7c49d533&txGid=e989ec5cee74e461078dadac99542931&sort=plf-f&originationType=b&rr=";
      OpenTarget(search_url);
      break;

    case "wos":
      var basic_url = "http://apps.webofknowledge.com/WOS_GeneralSearch_input.do;jsessionid=4F921D9908D7EADA849616020C0ACCF3?product=WOS&search_mode=GeneralSearch&SID=F5nsuE3nDtfmknlxqFV&preferencesSaved=";
      var search_url = basic_url + "q=" + searchTerm;
      OpenTarget(search_url);
      break;
  }
}