# @extra-workflow/memory-store
## Install
```sh
npm install --save @extra-workflow/memory-store
# or
yarn add @extra-workflow/memory-store
```

## API
### MemoryStore
```ts
class MemoryStore<T = unknown> implements IStore<T> {
  set(index: number, record: IRecord<T>): void
  get(index: number): IRecord<T> | undefined
  pop(): IRecord<T> | undefined
  clear(): void
  dump(): Array<IRecord<T>>
}
```
