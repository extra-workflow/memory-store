import { IRecord, IStore } from 'extra-workflow'
import { assert } from '@blackglory/prelude'

export class MemoryStore<T = unknown> implements IStore<T> {
  private array: Array<IRecord<T>> = []

  set(index: number, record: IRecord<T>): void {
    assert(index >= 0, 'The parameter index should be greater than or equal to 0')
    assert(
      index <= this.array.length
    , 'The parameter index should be less than or equal to the maximum index + 1'
    )

    this.array[index] = record
  }

  get(index: number): IRecord<T> | undefined {
    return this.array[index]
  }

  pop(): IRecord<T> | undefined {
    return this.array.pop()
  }

  clear(): void {
    this.array = []
  }

  dump(): Array<IRecord<T>> {
    return [...this.array]
  }
}
