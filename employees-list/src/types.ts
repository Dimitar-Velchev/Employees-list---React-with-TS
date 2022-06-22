
export interface IState {
    employees: {
      url: string;
      name: string;
      age: number;
      available: boolean;
      note?: string;
    }[];
  }
  
  export interface IPopular {
    popular: {
      id: number;
      title: string;
      image: string;
      imageType: string;
    }[];
  }

  export interface IRecipe {
    recipe:{
      id: number;
      title: string;
      image: string;
      imageType: string;
    }
  }