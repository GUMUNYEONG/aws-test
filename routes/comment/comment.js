const express = require('express')
const router = express.Router()
const {Comment} = require('../../awsTest/models')

router.get('/',async(req,res,next)=>{
    try{
        const data = await Comment.findAll({}) 
        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

router.post('/',async(req,res,next)=>{
    const {userid,content} = req.body
    try{
        const data = await Comment.create({
            userid,
            content
        })

        res.json(data)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

router.delete('/:id',async (req,res,next)=>{
    const {id} = req.params
    try{
        const data = await Comment.destroy({
            where:{id}
        })
        
        const result = data >=1 
        ? {result:'SUCCESS' , msg:"댓글이 삭제되었습니다."}
        : {result:'ERROR', msg:"서버오류가 발생되었습니다." }

        res.json(result)
    } catch(error) {
        console.error(error)
        next(error)
    }
})

router.patch('/:id',async (req,res,next)=>{
    const {id} = req.params
    const {content} = req.body

    try {
        const data = await Comment.update({
            content
        },{
            where:{id}
        })


        const result = data[0] >= 1
        ? {result:'SUCCESS', msg:'댓글이 수정되었습니다.',count:data[0]}
        : {result:'ERROR', msg:'서버오류가 발생되었습니다.',count:data[0]}

        res.json(result)
    } catch(error) {
        console.error(error)
        next(error)
    }
})



module.exports = router
