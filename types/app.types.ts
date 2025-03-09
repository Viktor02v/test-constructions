export interface IBaseField {
	$createdAt: string,
	$id: string
}
export interface News extends IBaseField {
  title: string;
  content: string;
  foto_url: string;
  views:number;
  author: string;
}