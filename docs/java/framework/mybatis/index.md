# MyBatis
## Maven添加依赖
pom.xml添加Mybatis依赖
```xml
<dependencies>
  <!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
  <dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.3</version>
  </dependency>
<、dependencies>
```

## xml格式
用UserSQL.xml定义的id做方法名，用parameterType做参数类型，用resultType定义返回类型。

xml文件放在`.\src\main\resources\yourproject\dao\`

### 查询
#### 单个查询
接口定义：
```java
public UserEntity getById(@Param("id")Long id);
```
SQL文件:
```xml
<select id="getById" resultType="yourproject.dao.UserEntity">
  select * from user where id=#{id}
</select>
```

#### 列表查询
接口定义：
返回值`List<Object>`有两个元素，第一个是列表数据，第二个是列表总数量
```java
public List<Object> getList(@Param("department_id")Long department_id,
@Param("order")String order, @Param("pager")Pager pager);
```
SQL文件:
```xml
<!-- 查询到的结果总数 -->
<resultMap type="java.lang.Long" id="count">
  <result column="total"/>
</resultMap>

<!-- 查询到的列表数据 -->
<select id="getList" resultMap="formula, count">
  select SQL_CALC_FOUND_ROWS *
  from user 
  <where>
    <if test="department_id !=null"> and department_id = #{department_id} </if>
  </where>
  <!-- 没有if-else语法,用choose-when-otherwise -->
  <!-- 以order by #{order}为例,如果传入的值是id，则解析成的sql为order by "id".所以要用${order} -->
  <choose>
    <when test="order !=null and order != ''"> order by ${order} </when>
    <otherwise> order by update_time desc</otherwise>
  </choose>
  limit #{pager.begin}, #{pager.size};
  SELECT FOUND_ROWS() AS total;
</select>
```

### 联合查询
查询用户时把部门也查出来

接口定义：
```java
public UserEntity getById(@Param("id")Long id);
```
SQL文件:
```xml
<!-- 用户结果映射 -->
<resultMap type="yourproject.entity.UserEntity" id="user">
  <association property="department"
    column="department_id"
    javaType="yourproject.entity.DepartmentEntity"
    select="getDepartmentId"
    fetchType="lazy"/>
</resultMap>

<!-- 查询用户 -->
<select id="getById" resultMap="user">
  select * from user where id=#{id}
</select>

<!-- 查询部门 -->
<select id="getDepartmentList" resultType="yourproject.entity.DepartmentEntity">
  department from stock_formula_group where uid =#{uid} and del_flag = 0
</select>
```
### 新增
接口定义：
```java
public int insert(@Param("u")UserEntity user);
```
SQL文件:
```xml
<!-- keyProperty：表示返回的 id 要保存到对象的哪个属性中，仅适用于 insert 和 update 语句
useGeneratedKeys：表示主键 id 为自增长模式，默认是 false，仅适用于 insert 和 update 语句 -->
<insert id="insert" useGeneratedKeys="true" keyProperty="id">
  insert into User(name, password, status) values(#{u.name}, #{u.password}, #{u.status})
</insert>
```

### 修改
接口定义：
```java
public int update(@Param("u")User user);
```
SQL文件:
```xml
<update id="update">
  update User set name=#{u.name} where id=#{u.id}
</update>
```

### 删除
接口定义：
```java
public int delete(@Param("id")Long id);
```
SQL文件:
```xml
<delete id="delete">
  delete from user where id=#{id}
</delete>
```

## 注解格式
使用Mapper注解(配合\@Select等注解),不用写UserSQL.xml文件，需要在SqlMapConfig.xml的mappers节点添加
`<package name="yourproject.dao.(包名)"/>`

类上添加注解`@Mapper`
```java
// 相关包
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UserMapperDao {
}
```

建议在sql简单时使用

### 查询
单个查询
```java
@Select("select * from User where status != 0 and id = #{id}")
public User getById(int id);
```

列表查询
```java
@Select("select * from User")
public List<User> findAll();
```

### 新增
列表查询
```java
@Insert("insert into User(name, password, status) values(#{u.name}, #{u.password}, #{u.status})")
public int insert(@Param("u")User user);
```

### 修改
列表查询
```java
@Update("update User set name=#{u.name} where id=#{u.id}")
public int update(@Param("u")User user);
```

### 删除
列表查询
```java
@Delete("delete from user where id=#{id}")
public int delete(@Param("id")Long id);
```