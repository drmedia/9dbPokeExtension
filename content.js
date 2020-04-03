
var crudServiceBaseUrl  = "https://pokeweather.azurewebsites.net/Ja9dbPokemonService"

btnkoSwitchCreate();
koReBuild();

function koBuildWiki_pokemons()
{
    $('#wiki_pokemons option').remove();

    var v_pokelist = $('#wiki_pokemons');
    $.each(pokemon_list, function(k, v) {
        var poke_id = k.replace('p', '');
        if (v.waza1) {
            v_pokelist.append('<option value="' + poke_id + '">' + v.name + '</option>');
        }
    });
}


function koBuildPokemon_list()
{
    $.post(crudServiceBaseUrl + "/GetPokemonlist", function (data) {
        pokemon_list = data;
        koBuildWiki_pokemons();

    }, "json");
}

function koBuildWaza_list()
{
    $.post(crudServiceBaseUrl + "/GetWazalist", function (data) {
        waza_list = data;
    }, "json");   
}


function koReBuild()
{
 
    if(typeof pokemon_list !=="undefined" ){
        this.koBuildPokemon_list();
    }
    
    if(typeof waza_list !=="undefined" ){
        this.koBuildWaza_list();       
    }
    
    if($("#btnkoSwitch").val() == "true"){
        $('.wiki_lh12.wiki_required.wiki_selected').click();
    } 
}

function btnkoSwitchCreate()
{

    var button = document.createElement("input");
    button.id = "btnkoSwitch";
    button.setAttribute("type" , "hiddden");
    button.setAttribute("value" , "false");
    document.body.appendChild(button);
    button.addEventListener("click", function() {
        if($("#btnkoSwitch").val() == "true"){
            $('.wiki_lh12.wiki_required.wiki_selected').click();
        }
        
    }, false);
    
}
 




 