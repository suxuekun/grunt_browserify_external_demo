export class DataAdapter{
	constructor(src){
		this.setSrc(src);
	}
	adapter(src){
		return src;
	}
	setSrc(src){
		this.src = src;
	}
	getData(){
		if (this.data == null){
			if (this.src != null){
				this.data = this.adapter(this.src);
			}
		}
		return this.data;
	}
}