import { ValueObject } from '../value-object'
import { v4 as uuidv4, validate as uuidValidate } from 'uuid'

export class Uuid extends ValueObject {
  readonly id: string

  constructor(id?: string) {
    super()
    this.id = id || uuidv4()
    this.validate()
  }

  private validate() {
    const isValid = uuidValidate(this.id)

    if (!isValid) {
      throw new InvalidUuidError('Invalid uuid')
    }
  }
}

export class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || 'Id is not a valid UUID')
    this.name = 'InvalidUuidError'
  }
}
