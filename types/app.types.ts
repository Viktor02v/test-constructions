export interface IBaseField {
	$createdAt: string,
	$id: string
}
export interface News extends IBaseField {
  title: string;
  content: string;
  date: string;
  foto_url: string;
}