import { DatePickerProps, RadioGroupProps } from "antd";


export interface CardContactTourProps {
  icon:React.ReactNode;
  header: string;
  content: string;
}

export interface DestinationsProps {
  items: PopularCardProps[];
  meta: Meta;
}

export interface DestinationSearchParams {
  order?: string;
  page?: number;
  page_size?: number;
  search_text?: string;
  price_min?: string;
  price_max?: string;
  sort_by?: string;
  province_name?: string;
  currency?: string;
}

export interface Meta {
  page_current: number;
  page_size: number;
  item_count: number;
  item_total: number;
  page_max: number;
}

export type PopularCardProps = { 
  id: number; 
  product_id: number; 
  name: string; 
  image: string; 
  tagline: string[]; 
  rating: number; 
  count: number; 
  booked: number; 
  exchange: { currency: string; rate: number; total: number; }; 
  price: number; 
  currency: 
  string; 
  discount: null; 
  most_popular: number; 
  status: string; 
  code?: string;
};

export type ServiceGhostCardProps = {
  id: string;
  icons: React.ReactNode;
  title: string;
  description: string;
};

export interface StepsComponentProps {
  key: string;
  label: string;
  title: string;
  content: React.ReactNode;
}

export interface participantsProps {
  name: string;
  label: string;
  price: number;
  currency: string;
}

export interface productDetailProps {
  id: number | undefined;
  name: string;
  destination: DestinationProps;
  badges: string[];
  rating: string;
  review: number;
  booked: number;
  wishlist: boolean;
  images: SliderProps[];
  description: string;
  currency: string;
  price: number;
  about_activity: ActivityProps,
  date: string[];
  detail: CollageDetailProps;
}

export interface CollageDetailProps {
  highlight: string[];
  description: string;
  eligibility: EligibilityProps;
  import: ImportProps;
}

export interface ImportProps {
  what_to_bring: string[];
  know_before: string[];
}

export interface EligibilityProps {
  not_suitable: string[];
  not_allow: string[];
}

export interface DestinationProps {
  name: string;
}

export interface PackageRadioProps extends RadioGroupProps {
  label: React.ReactNode;
  value: string | number | boolean;
  description?: string;
  time: string;
  product_id?: string;
  product_option_id?: string;
  product_schedule_id?: string;
  pickup_point: boolean;
  meeting_point:string [];
  price_min:number;
  // children?: React.ReactNode;
  // disabled?: boolean;
  time_slots: PackageTimeSlotProps[];
  currency: string;
  private: boolean;

}

export interface PackageIsExcludeProps {
  title: string;
  type: string;
}

export interface PackageItineraryProps {
  title: string;
  time: string;
  description: string;
}

export interface PackageMeetingProps {
  map: string;
  title: string;
}

export interface PackageTimeSlotProps {
  id: number;
  time: string;
  unit: PackageUnitProps[];
  tags: string[];
  title: string;
  description: string;
  meeting: PackageMeetingProps[];
  itinerary: PackageItineraryProps[];
  include_exclude: PackageIsExcludeProps[];
}

export interface PackageUnitProps {
  name: string;
  label: string;
  price: number;
  private: boolean;
  participant_min: number;
  participant_max: number;
}

export interface ActivityProps {
  guide_info: string;
  option: string[];
  private: boolean;
}

export interface SliderProps {
  imageSrc: string;
  imageAlt: string;
}

export interface BookingEnterInfoProps {
  destinations: string;
  product: string;
  option: string;
  time: string;
  meeting_point: string;
  start_time: string;
  preferred_language: LanguageOptionProps[];
  contact_info: string[];
  other_request: string[];
  tags: string[];
  quantity: QuantityProps[];
  total_price: number;
  total_sub: number;
  payment_mount: number;
}
export interface LanguageOptionProps {
  id: string;
  name:string;
}
export interface QuantityProps {
  name: string;
  count: number
}

export interface GetPackageRadioProps {
  currency: string,
  product_id: string | number, 
  date_travel: string | number
}

export interface DatePickerAntProps extends DatePickerProps {}



