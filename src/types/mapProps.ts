export interface CalloutsProps {
  regionName: string
  superRegionName: string
  location: {
    x: number
    y: number
  }
}

export interface MapProps {
  readonly uuid: string
  displayName: string
  narrativeDescription: string | null
  tacticalDescription: string | null
  coordinates: string | null
  displayIcon: string
  listViewIcon: string
  listViewIconTall: string
  splash: string
  stylizedBackgroundImage: string
  premierBackgroundImage: string | null
  assetPath: string
  mapUrl: string
  callouts: CalloutsProps[]
  xMultiplier: number
  yMultiplier: number
  xScalarToAdd: number
  yScalarToAdd: number
}

export type ListMapProps = MapProps[]
