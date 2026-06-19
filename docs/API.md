# 宿递 API 文档

## 基础信息

- Base URL: `http://localhost:3000/api`
- Content-Type: `application/json`

## 认证

### 发送验证码
```
POST /auth/send-code
Body: { "phone": "138xxxx1234" }
```

### 注册
```
POST /auth/register
Body: { "phone": "138xxxx1234", "code": "123456", "password": "xxx" }
```

### 登录
```
POST /auth/login
Body: { "phone": "138xxxx1234", "password": "xxx" }
Response: { "accessToken": "...", "refreshToken": "..." }
```

## 订单

### 发布订单
```
POST /orders
Headers: Authorization: Bearer <token>
Body: {
  "pickupLocation": "菜鸟驿站",
  "deliveryBuilding": "A栋",
  "deliveryRoom": "302",
  "deliveryFee": 5,
  "note": "取件码 1234"
}
```

### 获取待接单列表
```
GET /orders/pending
```

### 接单
```
POST /orders/:id/accept
Body: { "runnerId": "uuid" }
```

### 更新订单状态
```
PUT /orders/:id/status
Body: { "status": "picked_up" }
// status: picked_up | delivering | completed
```

### 取消订单
```
PUT /orders/:id/cancel
Body: { "reason": "不想要了" }
```

### 评价
```
POST /orders/:id/review
Body: { "rating": 5, "review": "很快！" }
```

## 错误码

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 201 | 创建成功 |
| 400 | 请求参数错误 |
| 401 | 未认证 |
| 409 | 冲突（如订单已被接） |
| 500 | 服务器错误 |
