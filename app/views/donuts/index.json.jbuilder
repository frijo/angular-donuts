json.array!(@donuts) do |donut|
  json.extract! donut, :id
  json.url donut_url(donut, format: :json)
end
