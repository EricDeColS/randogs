/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Repository {
  breeds: BreedProps[]
  id: string
  url: string
}
export interface BreedProps {
  id: number
  name: string
  reference_image_id?: string
  bred_for?: string
}



/**
 * State type
 */
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}
