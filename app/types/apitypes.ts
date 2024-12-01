export interface ApiResponse {
    data: AdDetails
}

export interface AdDetailProps {
  adDataResponse: ApiResponse
 }

export interface AdDetails {
    
  ID?: string;
  Title?: string;
  Price?: number;
  PriceCurrency?: string;
  Description?: string;
  Photos: Photo[]; 
  DataFields: DataField[]
}

export interface Photo {
  Position: number;
  Hash: string;
  PathBig: string;
};


export interface DataField {
    label: string;
    key: string;
    value: string;
    ftype: string;
    ValueID: string;
    ValueLabel: string;
    ValueDisplay: string;
    MainDetails: string;
    BottomDetails: string;
  }
