function countWords(title){
    if(title==null)
        return 0;
    let s= String (title);
    s=s.replace(/[^\w\s']/g, ' ')
        .trim()
    .replace(/\s+/g, ' ');
    if(s.length===0)
        return 0;
    return s.split(' ').length;
}

function sortLong (titles){


    titles.sort((a, b) => b.body.length - a.body.length);

    return titles;
}

function sortShort (titles) {
   return  titles.sort((a, b) => b.title.length - a.title.length);
}

function partitionPosts(posts){
    let long=[];
    let short=[];
    for(let i=0; i<posts.length; i++){
        let title= posts[i]?.title;
        let countTitleWords= countWords(title);
        if(countTitleWords>5){
            long.push(posts[i]);
        }else{
            short.push(posts[i]);
        }
    }
    long=  sortLong(long);
    short=  sortShort(short);
    return { long, short};
}

module.exports={partitionPosts};

