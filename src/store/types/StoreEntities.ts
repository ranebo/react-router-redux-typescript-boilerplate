// ================
// Entities
// ================

export interface TodoFragmentEntity {
  text: string;
  title: string;
}

export interface TodoEntity extends TodoFragmentEntity {
  readonly status: number;
  readonly id: number;
}

export interface UserInfoEntity {
  readonly name?: string;
  readonly email?: string;
  readonly token?: string;
  readonly roles?: string[];
}
