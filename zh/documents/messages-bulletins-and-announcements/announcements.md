---
order: "14.7"
title: 通告
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

通告类似于通用公告，不同之处在于字母 BLN 后跟一个大写字母通告标识符。通告的发送频率远低于公告（但可能持续数天），虽然在性质上可能是及时的，但通常不具有时间紧迫性。

通告通常用于事件前的情况，而公告通常在事件期间使用。

用户应在收到新公告或通告时得到提醒。

**通告格式**
```
:BLNXVVVVV:通告文本
```
- BLN：字面字符串
- X：单个大写字母通告标识符
- VVVVV：5 个填充空格
- 通告文本：最多 67 个字符

**示例：**
```
:BLNQVVVVV:Mt St Helen digi will be QRT this weekend
```
