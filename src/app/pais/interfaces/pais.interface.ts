export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  borders?:     string[];
  gini?:        { [key: string]: number };
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  USD?: Aed;
  BDT?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  NPR?: Aed;
  EUR?: Aed;
  TRY?: Aed;
  JMD?: Aed;
  LYD?: Aed;
  GBP?: Aed;
  JEP?: Aed;
  BOB?: Aed;
  MUR?: Aed;
  MGA?: Aed;
  PKR?: Aed;
  MWK?: Aed;
  SZL?: Aed;
  ZAR?: Aed;
  AUD?: Aed;
  KID?: Aed;
  AZN?: Aed;
  ZMW?: Aed;
  KES?: Aed;
  KWD?: Aed;
  KZT?: Aed;
  SLL?: Aed;
  XCD?: Aed;
  BZD?: Aed;
  RON?: Aed;
  BRL?: Aed;
  XAF?: Aed;
  XPF?: Aed;
  RUB?: Aed;
  PAB?: Aed;
  BND?: Aed;
  SGD?: Aed;
  GIP?: Aed;
  MYR?: Aed;
  MAD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  CHF?: Aed;
  BSD?: Aed;
  CAD?: Aed;
  FJD?: Aed;
  SAR?: Aed;
  KYD?: Aed;
  CLP?: Aed;
  TMT?: Aed;
  MMK?: Aed;
  YER?: Aed;
  SHP?: Aed;
  STN?: Aed;
  GTQ?: Aed;
  VES?: Aed;
  KMF?: Aed;
  DZD?: Aed;
  MRU?: Aed;
  NAD?: Aed;
  BAM?: BAM;
  CVE?: Aed;
  HKD?: Aed;
  MDL?: Aed;
  PHP?: Aed;
  ZWL?: Aed;
  IMP?: Aed;
  TZS?: Aed;
  SCR?: Aed;
  PYG?: Aed;
  BGN?: Aed;
  TND?: Aed;
  ISK?: Aed;
  CDF?: Aed;
  AWG?: Aed;
  IDR?: Aed;
  SEK?: Aed;
  LAK?: Aed;
  GMD?: Aed;
  ILS?: Aed;
  NOK?: Aed;
  SOS?: Aed;
  LKR?: Aed;
  RSD?: Aed;
  MOP?: Aed;
  GYD?: Aed;
  SRD?: Aed;
  LSL?: Aed;
  DKK?: Aed;
  FOK?: Aed;
  HNL?: Aed;
  EGP?: Aed;
  JOD?: Aed;
  PGK?: Aed;
  ERN?: Aed;
  MZN?: Aed;
  KPW?: Aed;
  XOF?: Aed;
  KHR?: Aed;
  DJF?: Aed;
  GHS?: Aed;
  BYN?: Aed;
  SBD?: Aed;
  FKP?: Aed;
  GGP?: Aed;
  CRC?: Aed;
  ALL?: Aed;
  UAH?: Aed;
  MKD?: Aed;
  SYP?: Aed;
  CZK?: Aed;
  BWP?: Aed;
  MXN?: Aed;
  BMD?: Aed;
  BHD?: Aed;
  AOA?: Aed;
  KRW?: Aed;
  TWD?: Aed;
  BBD?: Aed;
  ANG?: Aed;
  MVR?: Aed;
  GEL?: Aed;
  GNF?: Aed;
  LRD?: Aed;
  AED?: Aed;
  IQD?: Aed;
  TOP?: Aed;
  QAR?: Aed;
  UYU?: Aed;
  INR?: Aed;
  OMR?: Aed;
  COP?: Aed;
  ETB?: Aed;
  SDG?: BAM;
  ARS?: Aed;
  JPY?: Aed;
  HUF?: Aed;
  HRK?: Aed;
  KGS?: Aed;
  VND?: Aed;
  RWF?: Aed;
  THB?: Aed;
  TVD?: Aed;
  UGX?: Aed;
  TJS?: Aed;
  AMD?: Aed;
  NGN?: Aed;
  SSP?: Aed;
  AFN?: Aed;
  PLN?: Aed;
  LBP?: Aed;
  BIF?: Aed;
  PEN?: Aed;
  VUV?: Aed;
  IRR?: Aed;
  CNY?: Aed;
  TTD?: Aed;
  HTG?: Aed;
  UZS?: Aed;
  DOP?: Aed;
  MNT?: Aed;
  WST?: Aed;
  NIO?: Aed;
  BTN?: Aed;
}

export interface Aed {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
