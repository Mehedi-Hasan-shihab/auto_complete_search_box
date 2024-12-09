let availablekeywords = [
    'Html',
    'Css',
    'Javascript',
    'Bootstrap',
    'React',
    'Node',
    'MongoDB',
    'Express',
    'PHP',
    'Python',
    'Java',
    'C++',
    'C#',
    'Ruby',
    'Flutter',
    'Angular',
    'Where to learn coding',
    'What is coding',
    'How to learn coding',
    'Coding languages',
    'Coding tools',
    'Coding frameworks',
    'Coding libraries',
    'Coding frameworks',
    'How to create a website',
    'How to build a website',
    'How to design a website',
    'How to build a website',
    'How to build a website',
];


 

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }

    display(result);
    
    if(!result.length){
        resultBox.innerHTML = '';
    }

}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list +"</li>";
    });

        resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}