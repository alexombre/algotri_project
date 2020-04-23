let fs = require('fs');

//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    fct_global(data.split(" ").map(element => parseInt(element))); //Le contenu du fichier est présent dans data
});

//Méthode synchrone
const data = fs.readFileSync(process.argv[2], 'utf8'); //Throw en cas d'erreur (donc il faut catch)
const tri_bulle = (arr) => {

	cpt = 0;
	for (let i = arr.length - 1; i > 0; i--) {
		
		for (let j = 0; j < i; j++) {
			if (arr[j+1] < arr[j]) {
				let little = arr[j+1];
				let big = arr[j];
				arr[j+1] = big;
				arr[j] = little;
				
			}
			cpt++;
		}
	}
	console.log(`tri à bulles: ${cpt} comparaisons: ${arr}`);
}

const tri_insertion = (arr) => {
	let array = arr;
	cpt = 0;
	for (let i = 1; i < array.length ; i++) {
		val = array[i]
		let j = i
		while ( j > 0 && array[j-1] > val){
			
				let little = array[j];
				let big = array[j-1];
				array[j] = big;
				array[j-1] = little;
				j--;
				cpt++;
		}
	}
	console.log(`tri insertion: ${cpt} comparaisons: ${array}`);
	
}


const tri_fusion = (arr) => {
	
	arr = tri_fusion_rec(arr)
	console.log( `tri fusion: ${arr}` ) 
	
}

const tri_fusion_rec = (arr,cpt=0) => {

	if (arr.length <= 1) {
		return arr 
	}
	else {
		//console.log( fusion(tri_fusion(arr.slice(0,arr.length/2)), tri_fusion(arr.slice(arr.length/2))) )
		//console.log( fusion(tri_fusion_rec(arr.slice(0,arr.length/2)), tri_fusion_rec(arr.slice(arr.length/2))).length )

		return fusion(tri_fusion_rec(arr.slice(0,arr.length/2),cpt), tri_fusion_rec(arr.slice(arr.length/2)))
	};
}

const fusion = (first_arr = [], second_arr=[],cpt=0) => {


	if (first_arr.length == 0) {
		
		return second_arr 
	}
	if (second_arr.length == 0) {

		return first_arr
	}
	if (first_arr[0] <= second_arr[0]) {
		//console.log( [first_arr[0]].concat(fusion( first_arr.slice(1) ,second_arr)) )
		return [first_arr[0]].concat(fusion( first_arr.slice(1) ,second_arr))
	}
	else {
		//console.log( [second_arr[0]].concat(fusion( first_arr, second_arr.slice(1) ))  )
		return [second_arr[0]].concat(fusion( first_arr, second_arr.slice(1)))
	};

}

const fct_global = (arr) => {
	tri_fusion(arr);
	tri_insertion(arr);
	tri_bulle(arr);
}