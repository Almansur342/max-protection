export type TSolutions = {
    id:number;
    name:string;
    image: string;
    services: string[];
    packages: {
      "Basic_Plan": string[];
      "Enhanced_Plan": string[];
      "VIP_Plan": string[];
    };
}