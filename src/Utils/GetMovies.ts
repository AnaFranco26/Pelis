const API = "https://api.themoviedb.org/3";
export const getMovies=(path:string)=> {
    
    return fetch(API + path, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTllMDQ5NzVmMTVlZGQ1NjNlMGVhYjFhNjdiOWIwZSIsInN1YiI6IjYyZGYzODVmNDgxMzgyMDA1NDFhNDA5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CGrb_I9QwvLCRWMbHGAHrOuy6CVeJkPU4IRMw94rQN0",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => result.json());
  }