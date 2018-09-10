import $ from 'jquery';

export default function(type,text){
    const elem = $(`<${type}>`,{text});

    $('#root').append(elem);
}