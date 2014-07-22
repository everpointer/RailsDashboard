class Order
  include Mongoid::Document

  field :info, type: Hash
  field :source_id, type: String
  field :status, type: Integer, default: 1 # 0：未付款（不可递交），1：已付款（可递交），-1：存疑，需核对
  field :es_status, type: Integer, default: 0 # 0：待审核， 1：其他
  field :source # dd: 淘点点，tb: 淘宝  
  field :merchant # linjiatian, guoyi
  field :raw_create_date, type: DateTime # 原始单创建日期

  scope :paid, -> { where(status: 1, es_status: 0) }
  scope :latest, -> { desc(:raw_create_date) }

  index :source_id => 1
end
