//Complexity O(n²)
const exo_01 = (arr,k=0) => {
	for (let i = 0; i < arr.length;i++){
		for (let j = 0; j < arr.length;j++){
			if (arr[i] + arr[j] == k) {
				console.log(true)
				return true
			}
		}
		
	}
	console.log(false)
	return false
}
//Complexity O(n²)
const exo_02 = (arr) => {
	let cpt = 1;
	for (let i = 0; i < arr.length;i++){
		for (let j = i+1; j < i+2;j++){
			if (arr[i] > arr[j] ) {
				cpt++;
				
			}
		}
		
	}
	console.log(cpt)
	return cpt
}

//Complexity O(n)
const exo_04 = (arr) => {
	let cpt = 1;
	for (let i = 0; i < arr.length;i++){
		
			if (arr[i] > arr[i+1] ) {
				cpt++;
				
			}
		
		
	}
	console.log(cpt);
	return cpt
}
//Only one scanning
const exo_06 = (arr) => {
	
	return exo_04(arr);
}


//exo_01([10, 15, 3, 7]);
//exo_02([3, 7, 8, 3, 6, 1]);