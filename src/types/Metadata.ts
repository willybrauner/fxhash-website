import { Vec2 } from "./Math"
import { CaptureMode } from "./Mint"

export interface TokenMetadata {
  "": string
  name: string
  symbol: string
  decimals: number
}

export interface HistoryMetadata {
  [key: string]: any
}

export interface TokenFormat {
  uri: string,
  mimeType: string
}

export interface CaptureSettings {
  mode: CaptureMode
  resolution?: Vec2
  delay?: number
  canvasSelector?: string
}

// token features as they can be exported by a Token
export type RawTokenFeatures = Record<string, any>

// only types allowed for token features
export type TokenFeatureValueType = string|number|boolean

export interface TokenMetadataFeature {
  name: string
  value: TokenFeatureValueType
}

export interface TokenFeature {
  name: string
  value: TokenFeatureValueType
  rarity?: number
}

// errors which can be returned during processing RawTokenFeatures into TokenFeatures
export enum ProcessRawTokenFeatureErrorType {
  UNKNOWN                     = "UNKNOWN",
  INVALID_PROPERTY_TYPE       = "INVALID_PROPERTY_TYPE",
  INVALID_FEATURES_SIGNATURE  = "INVALID_FEATURES_SIGNATURE"
}
export const ProcessRawTokenFeatureErrorTypes = Object.values(ProcessRawTokenFeatureErrorType)

// the error thrown during Raw Token Features processing
export type ProcessRawTokenFeatureError = {
  type: ProcessRawTokenFeatureErrorType,
  extra?: string
}

export interface GenerativeTokenMetadata {
  name: string
  description: string
  childrenDescription: string
  tags: string[]
  // link to the fixed hash project
  artifactUri: string
  // link to the HQ preview image
  displayUri: string
  // link to the thumbnail image
  thumbnailUri: string
  // link to the generative URL project
  generativeUri: string
  authenticityHash: string
  capture: CaptureSettings
  decimals: number,
  symbol: string
}

export interface ObjktMetadata extends GenerativeTokenMetadata {
  features?: TokenMetadataFeature[] | null
}