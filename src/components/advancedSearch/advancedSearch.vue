<template>
    <div class="advanced-search">
      <div class="container_12 search-content">
        <div class="grid_12">
          <!--<Tabs type="card">
            <TabPane label="基础信息查书">-->
              <div class="search-input"><div class="word">书名</div><Input v-model="basicSearch.title" placeholder="请输入书名" style=""></Input></div>
              <div class="search-input"><div class="word">作者</div><Input v-model="basicSearch.author" placeholder="请输入作者名称" style=""></Input></div>
              <div class="search-input"><div class="word">书号</div><Input v-model="basicSearch.ISBN" placeholder="请输入书籍的ISBN编号" style=""></Input></div>
              <div class="search-input">
                <div class="word">图书系列</div>
                <Select v-model="basicSearch.publisher"   placeholder="请选择图书系列">
                  <Option v-for="item in publisher" :value="item.series" :key="item.series">{{ item.series }}</Option>
                </Select>
              </div>
              <div class="search-input">
                <div class="word">书籍类型</div>
                <Select v-model="basicSearch.bookType"   placeholder="请选择书籍类型">
                  <Option v-for="item in bookType" :value="item.label" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>

          <div class="search-input ">
            <div class="word">文档类型</div>
            <Select v-model="basicSearch.docType"   placeholder="请选择书籍文档类型">
              <Option v-for="item in docType" :value="item.label" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>

          <div class="search-input">
            <div class="word double">适读年龄:</div>
            <Select v-model="basicSearch.start"  placeholder="请选择适读年龄">
              <Option v-for="item in AGE" :value="item.value" :key="item.value"  :disabled="!((basicSearch.ageEnd && item.value <= basicSearch.ageEnd) || (!basicSearch.ageEnd))"  >{{ item.label }}</Option>
            </Select>
            <span class="tilde">~</span>

            <Select v-model="basicSearch.ageEnd"   placeholder="">
              <Option v-for="item in AGE" :value="item.value" :key="item.value"  :disabled="!((basicSearch.start && item.value >= basicSearch.start) || (!basicSearch.start))" >{{ item.label }}</Option>
            </Select>
          </div>

          <div class="search-input after-br">
            <div class="word double">适读年级:</div>
            <Select v-model="basicSearch.gradeStart"   placeholder="请选择适读年级">
              <Option v-for="item in grade" :value="item.value" :key="item.value" :disabled="!((basicSearch.gradeEnd && item.value <= basicSearch.gradeEnd) || (!basicSearch.gradeEnd))" >{{ item.label }}</Option>
            </Select>
            <span class="tilde">~</span>
            <Select v-model="basicSearch.gradeEnd"   placeholder="">
              <Option v-for="item in grade" :value="item.value" :key="item.value"  :disabled="!((basicSearch.gradeStart && item.value >= basicSearch.gradeStart) || (!basicSearch.gradeStart))">{{ item.label }}</Option>
            </Select>
          </div>

          <div class="search-input">
            <Checkbox v-model="basicSearch.arflag" >AR标识</Checkbox>
          </div>
              <div class="search-input">
                <div class="word">
                  <Tooltip content="这里是提示文字" placement="top">
                    <i  class="iconfont icon-wenhao"></i>
                  </Tooltip>
                  AR兴趣等级
                </div>
                <Select v-model="ARSearch.interestLevel"   placeholder="请选择书籍的兴趣等级" :disabled="!basicSearch.arflag">
                  <Option v-for="item in interestLevel" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>

          <div class="search-input" >
                <div class="word">AR测试号</div><InputNumber :disabled="!basicSearch.arflag"  v-model="ARSearch.QN" placeholder="请输入搜索的测试号" style="width: 100%;"></InputNumber>
              </div>
              <div class="search-input">
                <div class="word">AR测试类型</div>
                <Select v-model="ARSearch.quizType"   :disabled="!basicSearch.arflag">
                  <Option v-for="item in quizType" :value="item.label" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>

              <div class="search-input">
                <div class=" word double">
                  <Tooltip content="这里是提示文字" placement="top">
                    <i  class="iconfont icon-wenhao"></i>
                  </Tooltip>BL值范围</div><Input  :disabled="!basicSearch.arflag" v-model="ARSearch.ABLev" placeholder="请输入搜索书籍的BL值范围"></Input>
                <span class="tilde">~</span><Input :disabled="!basicSearch.arflag" v-model="ARSearch.ABLevT"  ></Input>
              </div>
              <div class="search-input after-br">
                <div class="word double">阅读分值范围</div><Input :disabled="!basicSearch.arflag"  v-model="ARSearch.ARP" placeholder="请输入搜索书籍阅读分值范围" style=""></Input>
                <span class="tilde">~</span><Input  :disabled="!basicSearch.arflag" v-model="ARSearch.ARPT"  style=""></Input>
              </div>

          <div class="search-input">
            <Checkbox v-model="basicSearch.lsflag" >蓝思标识</Checkbox>
          </div>
              <div class="search-input">
                <div class="word double">蓝思值阅读范围</div><Input :disabled="!basicSearch.lsflag" v-model="LLSearch.LLV" placeholder="请输入蓝思值的阅读范围" style=""></Input>
                <span class="tilde">~</span><Input :disabled="!basicSearch.lsflag"  v-model="LLSearch.LLVT"  style=""></Input>
              </div>
              <div class="search-input">
                <div class="word">排序方法</div>
                <Select v-model="LLSearch.sort" >
                  <Option v-for="item in sort" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
              <div class="search-input">
                <Checkbox v-model="basicSearch.hasstock" >尚有库存</Checkbox>
                <Checkbox v-model="basicSearch.musflag" >馆藏音频</Checkbox>
              </div>
          <div  class="basics-search-button-group">
            <div class="search-btn">
              <Button type="info" @click="getSearchInfo">搜索</Button>
            </div>
            <div class="empty-btn">
              <Button type="info" @click="emptyBasic()">清空</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import './advancedSearch.scss'
import  searchApi from '../../api/advancedSearch'
    export default{
        data(){
            return {
              publisher:null,
              grade:GRADELIST,
              AGE:[{value:3,label:'3岁'},{value:4,label:'4岁'},{value:5,label:'5岁'},{value:6,label:'6岁'},{value:7,label:'7岁'},{value:8,label:'8岁'},{value:9,label:'9岁'},{value:10,label:'10岁'},{value:11,label:'11岁'},{value:12,label:'12岁'},{value:13,label:'13岁'},{value:14,label:'14岁'},{value:15,label:'15岁'},{value:16,label:'16岁'},{value:17,label:'17岁'},{value:18,label:'18岁'},{value:19,label:'19岁'}],
              docType:DOCTYPE,
              bookType:[{value:1,label:"精装版本"},{value:2,label:"平装版本"},{value:3,label:"图书馆版本"},{value:4,label:"纸版书"}],
              quizType:[{value:1,label:"Any Quiz Type"},{value:2,label:"Reading Practice"},{value:3,label:"Recorded Voice"},{value:4,label:"Vocabulary Practice"},{value:5,label:"Literacy Skills"}],
              interestLevel:INTERESTLEVEL,
              sort:[{value:'name',label:"书名(缺省)"},{value:'author',label:"作者"},{value:'bl',label:"BL等级(ATOS)阅读范围"},{value:'il',label:"AR兴趣等级"},{value:'lexile_value',label:"蓝思值阅读范围"},{value:'recommend_index',label:"推荐等级"}],
              basicSearch:{
                  type:null,
                  title:null,
                  author:null,
                  ISBN:null,
                  publisher:null,
                  bookType:null,
                  docType:'Fiction and Nonfiction',
                  hasstock:null,
                  musflag:null,
                  arflag:null,
                  lsflag:null,
                  ageEnd:'',
                  start:'',
                  gradeStart:'',
                  gradeEnd:'',
                },
                ARSearch:{
                  ABLev:null,
                  ABLevT:null,
                  ARP:null,
                  ARPT:null,
                  QN:null,
                  quizType:'Any Quiz Type',
                  interestLevel:null,
                },
                LLSearch:{
                  LLV:null,
                  LLVT:null,
                  sort:null,
                },

            }
        },
        components: {},
        created(){
            this.getBookSeries()
        },
      watch:{
        'basicSearch.ageStrat'(v1,v2){
          console.log(v1)
        },
        'basicSearch.ageEnd'(v1,v2){
          console.log(v1)
        }
      },
        mounted(){
        },
        methods: {
          getBookSeries(){
            searchApi.getBookSeries().then((response)=>{
                 this.publisher = response.data
            }).catch((response)=>{

            })
          },
          emptyBasic(){
             this.basicSearch={
               type:'',
               title:'',
               author:'',
               ISBN:'',
               publisher:'',
               docType:'Fiction and Nonfiction',
               hasstock:false,
               musflag:false,
               arflag:false,
               lsflag:false,
               start:'',
               ageEnd:'',
               gradeStart:'',
               gradeEnd:'',
             }
            this.ARSearch={
              ABLev:'',
              ABLevT:'',
              ARP:'',
              ARPT:'',
              QN:null,
              quizType:'Any Quiz Type',
              interestLevel:null,
            }
            this.LLSearch={
              LLV:'',
              LLVT:'',
            }
          },
          getSearchInfo(){
             setAdvancedSearchInfo(this.basicSearch,this.ARSearch,this.LLSearch)
            this.$router.push({path: '/book_list'})


          }
        }
    }
</script>
