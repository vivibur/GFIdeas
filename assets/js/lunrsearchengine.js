
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Welcome to Gluten Free Ideas!!!",
    "body": "At home we looove cooking and sharing meals with friends and family.  We cook without gluten and very often we also adapt our recipes to accommodate friends and family who can’t have some specific ingredients, whether it is sugar, dairy, meat…you name it. So we decided to create this site to share some of our favorite family dishes.  We hope that you enjoy the recipes and find them easy to follow. "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 4,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/page3/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "/short-ribs/",
    "title": "Short Ribs",
    "body": "2021/07/12 - Ingredients:  2 pounds Short ribs 1 tbsp olive oil Salt and pepper to tastePreparation:  Rinse the short ribs and pat dry.  Place the short ribs on a tray, drizzle the olive oil on top, salt and pepper to taste and put aside.  If cooking in the BBQ, preheat to 375º F.  Place the short ribs on the grill with the bone side down for approximately 15-20 minutes, depending on the thickness of the ribs.  After 15-20 minutes flip the short ribs for another 10 minutes approximately, until it is done.    To make sure the short ribs are cooked, you can cut close to the bone and check if you like how cooked they are or you can use a meat thermometer.   If cooking in the oven, preheat to 425ºF.  Place the short ribs in a tray, with the bone side down.  Place the tray in the oven, in the middle rack, for 20-25 minutes, approximately, depending on the thickness of the ribs.  Flip the short ribs and put back in the oven for another 10 minutes, approximately, until it is done.  To make sure the short ribs are cooked, you can cut close to the bone and check if you like how cooked they are or you can use a meat thermometer.  In the oven, if you like the short ribs crispy, put the oven in broil for 5 minutes. Enjoy!!! Tips:  For the recipe to be low sodium replace the salt with low sodium salt or use just pepper. "
    }, {
    "id": 8,
    "url": "/tomatillo-avocado-sauce/",
    "title": "Tomatillo and Avocado Sauce",
    "body": "2021/07/05 - This is a very simple recipe to prepare a tasty sauce that goes well with meats, fish, in sandwiches, tacos and burritos. Ingredients:  4 medium size tomatillos 1 tbsp cilantro, chopped 1 handful of fresh cilantro 1 head of garlic 2 jalapeños (optional, if you like it spicy) 1 tbsp lime juice 1 tsp salt 1/2 avocado (ripe)Preparation:  Wash the tomatillos.  Cut the top of the garlic head.  If cooked in the BBQ, preheat to high temperature. Place the tomatillos, the garlic and the jalapeños in the BBQ for 2 minutes on each side.  If cooked in the oven, turn on the broiler. Place the tomatillos, the garlic and the jalapeños on a baking sheet in the middle rack for 3 minutes on each side.  The tomatillos are ready when charred on both sides, but do not let them get too soft. The garlic is ready when soft, when you can poke with the knife with no resistance. Finally, with the jalapeños it doesn’t matter if it is soft or not.  Let the tomatillos, garlic and the jalapeños cool down.  In a blender place the tomatillos, jalapeños, 1/4 avocado, 4 cloves of garlic (or more, to taste), salt, 1 handful of cilantro, lime juice and blend.  Place the mix in a bowl, add 1/4 avocado previously diced, the chopped cilantro, additional lime juice and salt to taste. Enjoy!!! Tips:  For the recipe to be low sodium replace the salt with low sodium salt or use just pepper. "
    }, {
    "id": 9,
    "url": "/grilled-peppers/",
    "title": "Grilled Peppers",
    "body": "2021/06/30 - Grilled peppers can be served as a side dish as you can see in the short ribs plate picture, in sandwiches, and as pizza topping. It is very easy to prepare and is preserved in oil. Ingredients:  6 Peppers Oil (we use canola oil, but others work well) 6 Cloves of chopped garlic (optional)Preparation:  You can cook the peppers either in the BBQ or in the oven.  If you use the BBQ preheat to 400-450ºF.  If you use the oven use the broil setting.  Wash the peppers and place them either in the barbecue or in a baking sheet in the middle rack in the oven.  Cook for 10-12 minutes and then turn the peppers every 2-3 minutes, until all sides are charred and the peppers are soft.  Remove the peppers from the BBQ or the oven and let them cool down a little, for a few minutes.  Then clean the peppers by removing the skin, the seeds and the stem. Cut them in large pieces . One pepper may be cut in 2 or 3 slices  Chop the garlic in tiny cubes.  In a container with a lid ( a jar or a bowl with a lid) place the peppers, the garlic and add oil until you fully cover the peppers.  We use canola oil but any other oil you like would work. Enjoy! "
    }, {
    "id": 10,
    "url": "/short-ribs-plate/",
    "title": "Short Ribs Plate",
    "body": "2021/06/24 - This is a delicious plate of short ribs, accompanied by a tomatillo and avocado sauce, grilled peppers and a carrot salad. The short ribs can be prepared either in the barbecue or in the oven. Ingredients:  2 pounds Short ribs 1 tbsp olive oil Salt and pepper to tastePreparation:  Rinse the short ribs and pat dry.  Place the short ribs on a tray, drizzle the olive oil on top, salt and pepper to taste and put aside.  If cooking in the BBQ, preheat to 375º F.  Place the short ribs on the grill with the bone side down for approximately 15-20 minutes, depending on the thickness of the ribs.  After 15-20 minutes flip the short ribs for another 10 minutes approximately, until it is done.    To make sure the short ribs are cooked, you can cut close to the bone and check if you like how well done or you can use a meat thermometer.   If cooking in the oven, preheat to 425ºF.  Place the short ribs in a tray, with the bone side down.  Place the tray in the oven, in the middle rack, for 20-25 minutes, approximately, depending on the thickness of the ribs.  Flip the short ribs and put back in the oven for another 10 minutes, approximately, until it is done.  To make sure the short ribs are cooked, you can cut close to the bone and check if you like how well done or you can use a meat thermometer.  In the oven, if you like the short ribs crispy, put the oven in broil for 5 minutes. Enjoy!!! Tips:  For the recipe to be low sodium replace the salt with low sodium salt or use just pepper. "
    }, {
    "id": 11,
    "url": "/onion-saute/",
    "title": "Pizza Topping: Onion Saute",
    "body": "2021/06/21 - This quick recipe makes for a tasty pizza topping or side dish. Ingredients:  2 onions 1 tbsp oil (we prefer olive, but use anyone you like) 1 tbsp oreganoPreparation:  Slice the onions finely.  Oil a pan and place the onions.  Sprinkle the oregano on top.  Cook for 3 minutes in high heat while mixing.  Once finished, remove the onions from the pan and place them in a bowl. Note that if you leave the onions in the pan they will continue to cook and soften, even if the heat is off. Enjoy!!! "
    }, {
    "id": 12,
    "url": "/tomato-sauce/",
    "title": "Quick and Easy Tomato Sauce",
    "body": "2021/06/19 - This is a very simple recipe to prepare a tasty tomato sauce super quickly. Ingredients:  400 ml crushed tomato 1 tbsp oil 1 tbsp water 1 tsp salt 1 tsp sugar 2 tsp oregano 2 medium bay leaves 1/2 tsp pepper 1 tsp chilly flakes (optional)Preparation:  Place all the ingredients in a pot.  Cook for 5-7 minutes with medium heat, without covering the pot, and slowly mixing the sauce until it is reduced (reduced means that the mixture is thickened). Enjoy!!! This is a quick option to use when preparing gluten free pizza! Tips:  For the recipe to be low sodium replace the salt with low sodium salt or use just pepper.  Make sure the crushed tomatoes don’t have added sugar, salt or spices that may have gluten or other ingredients that you may wish to avoid. "
    }, {
    "id": 13,
    "url": "/pizza-tips/",
    "title": "Tips to Make Gluten Free Pizza ",
    "body": "2021/06/17 - Over the years we were collecting some useful tips when preparing gluten free pizza.  We hope you find them helpful! Tip 1. How to get gluten-free pizza dough to rise: An easy way to create a good environment for gluten-free pizza dough to rise is to turn your oven to 100-170ºF, whatever is the minimum your oven allows.  When it reaches this temperature, turn off the oven and place the pizza dough in the middle rack of the oven.  In 30-40 minutes the pizza dough should be ready, usually at least doubling its size. Tip 2. Pizza toppings: Using many toppings is sometimes tricky with gluten-free dough. What works best for us when using lots of toppings is to prepare the pizza in the oven with only tomato or tomato and cheese. Separately prepare the different toppings and add them on top once the pizza is done. Tip 3. Crispy gluten-free pizza: If you like your pizza crispier, especially in the bottom, after the pizza is cooked place the pizza or the portions you are planning to have on a pan for 3-5 minutes at high temperature. Tip 4. Melting Cheese: For the cheese to melt better, either slice or shred it and place it in a bowl with water for at least 15 minutes. When you need to use the cheese on your pizza, just strain the water and put the cheese on your pizza. The cheese will melt beautifully!! Tip 5. Warm-up cold pizza in the microwave: If you plan to warm up your pizza in the microwave, place a paper towel or paper napkin in the bottom of the plate.  That way the paper will absorb the humidity and the pizza won’t get soggy. "
    }, {
    "id": 14,
    "url": "/pizza-cheese/",
    "title": "Gluten Free Cheese Pizza",
    "body": "2021/06/10 - Ingredients:  3 cup gluten free flour 2 tsp xhantan gum 1 tsp salt 4 tsp	sugar 4. 5 tsp dry yeast 2 cup	warm water 2 tsp	olive oil 6 tbsp tomato sauce 2 cups cheese such as mozzarella or havarti (any cheese that melts) Oregano to taste Olives, green and/or black to tastePreparation:    In a bowl place the gluten free flour with the xhantan gum, salt, sugar and dry yeast. Make a small hole in the center and add the warm water and the olive oil. Mix with an electric mixer for 2 minutes, until you get a homogeneous and creamy dough.       Oil a pizza baking sheet or line it with parchment. Pour the dough on the baking sheet, spread the mix with a spatula or with your hands to give it a round shape. (Tip: to mold the pizza wet the spatula or your hands with cold water).   Cover the dough with film, put a clean cloth on top and let it rise in a warm place until the preparation doubles in size. It should take 30 minutes to 1 hour.  Preheat the oven to 390ºF and place the baking sheet in the bottom of the oven for 15 minutes approximately, until the bottom of the pizza can be easily raised with a spatula.  Take the pizza out of the oven, spread the tomato sauce on the pizza dough and distribute the cheese either cut in slices or shredded on top. We like using mozzarella and havarti.  Place the pizza back in the oven, in the middle rack, for 10 minutes approximately, until the cheese if fully melted.  If you like the cheese crispy, change the oven to broiler for 3-5 minutes, until the cheese is bubbling. This step is optional.  Take the pizza out of the oven, put olives on top and sprinkle oregano. Enjoy!!!Tips:    The original recipe is lacto-vegetarian.  To make the recipe vegan just replace the cheese with a vegan cheese alternative that melts on top.     How to warm up pizza: ideally don’t use microwave, but if you do, put paper towel under the pizza.  "
    }, {
    "id": 15,
    "url": "/carrot-salad/",
    "title": "Carrot Salad",
    "body": "2021/06/03 - Ingredients:  2 carrots per person 1 egg per person 1 lemmon juice Oil, salt and pepper to tastePreparation:  Boil the eggs.  Let the hardboiled egg/s cool down. Then chop it/them in small cubes.  Wash and peel the carrots and remove their top and bottom.  Shred the carrots.  Place the carrots in a bowl and add lemon juice so that the carrots don’t change their color (oxidize).  Add the eggs to the carrots Finally, season with oil, salt and pepper to taste and enjoy!Tips:  For the recipe to be low sodium replace the salt with low sodium salt or use just pepper. "
    }, {
    "id": 16,
    "url": "/Yogurt/",
    "title": "Yogurt & Berries",
    "body": "2021/05/30 - Ingredients:    6 tbsp vanilla yogurt     2 tbsp berries mix (fresh or frozen)     1 tsp chia seeds (optional)  Preparation:  If the berries are fresh chop the strawberries. If the berries are frozen, defrost them in the microwave for approximately 50 seconds until they are soft.  Place the vanilla yogurt in a bowl and add the berries on top.  Sprinkle chia seeds (optional) and enjoy!Tips:  In addition to berries, other fruits we love mixing with vanilla yogurt are bananas, peaches, plums and apricots.  For the dish to be sugar free, the yogurt needs to be sugar free.  For the dish to be dairy free, use dairy free yogurt.  For the dish to be vegan, use vegan yogurt. "
    }, {
    "id": 17,
    "url": "/yams/",
    "title": "Yum-yum Yam chips!",
    "body": "2021/05/29 - Ingredients:    1 yam per person, thinly sliced     Oil     Salt or pepper to taste  Preparation:  Preheat the oven at 425º F.  Oil a baking sheet or line it with parchment.  Peel and slice the yam/s very thinly.  Arrange the yam slices on the baking sheet side by side. Avoid overlapping them for a faster and even cooking.  Slightly salt the yams and put a few drops of your favorite oil on top.  We like using olive oil, but any oil will work great.  Place in the oven for 10 minutes. Then flip the yams in the tray and put them back in the oven for another 10 minutes. By then the yams should be soft.  Finally take the yams out of the oven and enjoy! Serve warm or at room temperature. Low sodium option: For the recipe to be low sodium just replace the salt with low sodium salt or pepper. "
    }, {
    "id": 18,
    "url": "/gf-flour2/",
    "title": "Gluten Free Flour, version 2",
    "body": "2021/05/28 - For our recipes you can use any gluten free flour.  Personally, I always keep in my pantry a mix of flours that I like for baking. This is another combination of products I like using. Ingredients:  300 grams of rice flour 300 grams of tapioca starch 400 grams of cornstarchKeep it in an air-tight container. NOTE: make sure that all your ingredients are gluten free. "
    }, {
    "id": 19,
    "url": "/gf-flour1/",
    "title": "Gluten Free Flour",
    "body": "2021/05/09 - For our recipes you can use any gluten free flour.  Personally, I always keep in my pantry a mix of flours that I like for baking. Ingredients:  3 cups of rice flour 1 cups of cornstarch 1/2 cup fo tapioca starchKeep it in an air-tight container. Note: make sure that all your ingredients are gluten-free. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});