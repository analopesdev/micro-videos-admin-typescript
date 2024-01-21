import { InvalidUuidError, Uuid } from '../uuid.vo'
import { validate as uuidValidate } from 'uuid'

describe('UUID Unit Tests', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

  test('Should throw error when uuid is invalid', () => {
    expect(() => {
      new Uuid('invalid-uuid')
    }).toThrowError(new InvalidUuidError('Invalid uuid'))

    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  test('Should create a valid uuid', () => {
    const uuid = new Uuid()

    expect(uuid.id).toBeDefined()
    expect(uuidValidate(uuid.id)).toBe(true)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  test('should accept a valid uuid', () => {
    const uuid = new Uuid('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11')

    expect(uuid.id).toBe('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11')
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})
