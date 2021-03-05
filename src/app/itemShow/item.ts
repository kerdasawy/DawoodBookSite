 
export class Item {
  /*[Key]
[global::System.Data.Linq.Mapping.ColumnAttribute(Storage = "ID", AutoSync = AutoSync.OnInsert, DbType = "Int NOT NULL IDENTITY", IsPrimaryKey = true, IsDbGenerated = true)]*/
  public ID: number;
  public Name: string;
  public Desc: string;
  public Type: string;
  public Heated: boolean;
  public HeatDegree: number;
  public MoitureDegree: number;
  public Comment: string;
  public Esaay: string;
  public YoutubeLink: string;
  public ToString(): string {
    return this.Name;
  }
}
