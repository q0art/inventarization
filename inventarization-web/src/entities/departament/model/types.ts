export interface Departament {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDepartamentDto {
  name: string;
}

export interface UpdateDepartamentDto {
  name: string;
}
