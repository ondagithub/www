


async function getData(){
    const url = "https://apis.data.go.kr/1051000/recruitment/list?serviceKey=4rUQqCX8qWk1ggrG2qoSNmvnmKh4xXIODpse1CLML4Adnz5DWdSeVaC2PE%252BBk%252BMwrap0WoxHi5QaNNx3QtRuhw%253D%253D&ncsCdLst=R600020";    
    const response = await fetch(url);
    const data = await response.json();
    console.log("data",data);
}


    