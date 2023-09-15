const movies = [
	{
		"id": "1",
		"name": "Jawan",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOFxBsQZbX5h-WZG876pe-9Dz-NgqYhk8FA&usqp=CAU",
		"rating": "4.5",
		"released": "15-09-2023"
	},
	{
		"id": "2",
		"name": "Kabir Singh",
		"img": "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
		"rating": "4",
		"released": "15-09-2023"
	},
	{
		"id": "3",
		"name": "Avatar",
		"img": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
		"rating": "5",
		"released": "15-09-2023"
	},
	{
		"id": "4",
		"name": "Jawan",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOFxBsQZbX5h-WZG876pe-9Dz-NgqYhk8FA&usqp=CAU",
		"rating": "4.5",
		"released": "15-09-2023"
	},
	{
		"id": "5",
		"name": "Kabir Singh",
		"img": "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
		"rating": "4",
		"released": "15-09-2023"
	},
	{
		"id": "6",
		"name": "Avatar",
		"img": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
		"rating": "5",
		"released": "15-09-2023"
	},
	{
		"id": "7",
		"name": "Jawan",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOFxBsQZbX5h-WZG876pe-9Dz-NgqYhk8FA&usqp=CAU",
		"rating": "4.5",
		"released": "15-09-2023"
	},
	{
		"id": "8",
		"name": "Kabir Singh",
		"img": "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
		"rating": "4",
		"released": "15-09-2023"
	},
	{
		"id": "9",
		"name": "Avatar",
		"img": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
		"rating": "5",
		"released": "15-09-2023"
	},
	{
		"id": "10",
		"name": "Jawan",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOFxBsQZbX5h-WZG876pe-9Dz-NgqYhk8FA&usqp=CAU",
		"rating": "4.5",
		"released": "15-09-2023"
	},
	{
		"id": "11",
		"name": "Kabir Singh",
		"img": "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
		"rating": "4",
		"released": "15-09-2023"
	},
	{
		"id": "12",
		"name": "Avatar",
		"img": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
		"rating": "5",
		"released": "15-09-2023"
	},
	{
		"id": "13",
		"name": "Jawan",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOFxBsQZbX5h-WZG876pe-9Dz-NgqYhk8FA&usqp=CAU",
		"rating": "4.5",
		"released": "15-09-2023"
	},
	{
		"id": "14",
		"name": "Kabir Singh",
		"img": "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
		"rating": "4",
		"released": "15-09-2023"
	},
	{
		"id": "15",
		"name": "Avatar",
		"img": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
		"rating": "5",
		"released": "15-09-2023"
	},
	{
		"id": "16",
		"name": "Jawan",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOFxBsQZbX5h-WZG876pe-9Dz-NgqYhk8FA&usqp=CAU",
		"rating": "4.5",
		"released": "15-09-2023"
	},
	{
		"id": "17",
		"name": "Kabir Singh",
		"img": "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
		"rating": "4",
		"released": "15-09-2023"
	},
	{
		"id": "18",
		"name": "Avatar",
		"img": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
		"rating": "5",
		"released": "15-09-2023"
	}, {
		"id": "19",
		"name": "Jawan",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOFxBsQZbX5h-WZG876pe-9Dz-NgqYhk8FA&usqp=CAU",
		"rating": "4.5",
		"released": "15-09-2023"
	},
	{
		"id": "20",
		"name": "Kabir Singh",
		"img": "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
		"rating": "4",
		"released": "15-09-2023"
	},
	{
		"id": "21",
		"name": "Avatar",
		"img": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
		"rating": "5",
		"released": "15-09-2023"
	},
	{
		"id": "22",
		"name": "Jawan",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOFxBsQZbX5h-WZG876pe-9Dz-NgqYhk8FA&usqp=CAU",
		"rating": "4.5",
		"released": "15-09-2023"
	},
	{
		"id": "23",
		"name": "Kabir Singh",
		"img": "https://m.media-amazon.com/images/M/MV5BNTVjMjExNWEtOWFiNS00ZTE2LWI0ODMtZTFlNDZiZWQ4MWVjXkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_.jpg",
		"rating": "4",
		"released": "15-09-2023"
	},
	{
		"id": "24",
		"name": "Avatar",
		"img": "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
		"rating": "5",
		"released": "15-09-2023"
	}
]


export default movies