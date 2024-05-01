interface DamageRangeProps {
  rangeStartMeters: number
  rangeEndMeters: number
  headDamage: number
  bodyDamage: number
  legDamage: number
}

interface AdsStatsProps {
  zoomMultiplier: number
  fireRate: number
  runSpeedMultiplier: number
  burstCount: number
  firstBulletAccuracy: number
}

interface WeaponsStatsProps {
  fireRate: number
  magazineSize: number
  runSpeedMultiplier: number
  equipTimeSeconds: number
  reloadTimeSeconds: number
  firstBulletAccuracy: number
  shotgunPelletCount: number
  wallPenetration: string
  feature: string
  fireMode: null
  altFireType: string
  adsStats: AdsStatsProps
  altShotgunStats: null
  airBurstStats: null
  damageRanges: DamageRangeProps[]
}

interface GridPositionProps {
  row: number
  column: number
}

interface ShopDataProps {
  cost: number
  category: string
  shopOrderPriority: number
  categoryText: string
  gridPosition: GridPositionProps
  canBeTrashed: boolean
  newImage: string
  image: string | null
  assetPath: string
}

interface ChromasProps {
  readonly uuid: string
  displayName: string
  displayIcon: string | null
  fullRender: string
  swatch: null
  streamedVideo: null
  assetPath: string
}

interface LevelsProps {
  readonly uuid: string
  displayName: string
  levelItem: null
  displayIcon: string
  streamedVideo: null
  assetsPath: string
}

interface SkinsProps {
  readonly uuid: string
  displayName: string
  themeUuid: string
  contentTierUuid: string
  displayIcon: string
  wallpaper: string | null
  assetPath: string
  chromas: ChromasProps[]
  levels: LevelsProps[]
}

export interface WeaponProps {
  readonly uuid: string
  displayName: string
  category: string
  defaultSkinUuid: string
  displayIcon: string
  killStreamIcon: string
  assetPath: string
  weaponStats: WeaponsStatsProps | null
  shopData: ShopDataProps | null
  skins: SkinsProps[]
}

export type ListWeaponsProps = WeaponProps[]
