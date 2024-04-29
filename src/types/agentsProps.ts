export interface RoleAgentProps {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
  assetPath: string
}

export interface AbilitiesProps {
  slot: string
  displayName: string
  description: string
  displayIcon: string | null
}

export interface AgentProps {
  readonly uuid: string
  displayName: string
  description: string
  developerName: string
  characterTags: string[] | null
  displayIcon: string
  displayIconSmall: string
  bustPortrait: string | null
  fullPortrait: string | null
  fullPortraitV2: string | null
  killfeedPortrait: string
  background: string | null
  backgroundGradientColors: string[]
  assetPath: string
  isFullPortraitRightFacing: boolean
  isPlayableCharacter: boolean
  isAvailableForTest: boolean
  isBaseContent: boolean | null
  role: RoleAgentProps
  recruitmentData: null
  abilities: AbilitiesProps[]
  voiceLine: null
}

export type ListAgentsProps = AgentProps[]
