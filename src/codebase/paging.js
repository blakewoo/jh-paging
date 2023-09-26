const JH_paging = (function () {

    function JH_paging (CONTAINER,CURRENT_COUNT,TOTAL_COUNT) {
        this.CONTAINER = CONTAINER
        this.TOTAL_COUNT = TOTAL_COUNT
        this.CURRENT_COUNT = CURRENT_COUNT;
        this.paint()
    }

    JH_paging.prototype.paint = function () {
        let container = this.CONTAINER
        let totalCount = Number(this.TOTAL_COUNT)
        let currentCount = Number(this.CURRENT_COUNT)

        let startNumber = currentCount <= 10 ? 1 : (currentCount%10===0?Number(Math.floor((currentCount-1)/10))*10+1 :Number(Math.floor(currentCount/10))*10+1)
        let endNumber = Number(Math.ceil(currentCount/10))*10 <= totalCount ? Number(Math.ceil(currentCount/10))*10 : totalCount

        let tempPrag = document.createDocumentFragment()
        if(startNumber !== 1){
            let tempLeftArrow = document.createElement("label")
            tempLeftArrow.innerText = "<"
            tempLeftArrow.addEventListener("mouseover",function (event) {
                event.currentTarget.style.fontWeight = "bold"
                event.currentTarget.style.cursor = "pointer"
            })
            tempLeftArrow.addEventListener("mouseout",function (event) {
                event.currentTarget.style.fontWeight = "normal"
                event.currentTarget.style.cursor = "default"
            })
            tempLeftArrow.id = "number-"+Number(startNumber-1)
            tempLeftArrow.addEventListener("click",this.numberClick.bind(this))
            tempPrag.appendChild(tempLeftArrow)
        }

        for(let index = startNumber;index <= endNumber;index++) {
            let tempLabel = document.createElement("label")
            tempLabel.addEventListener("mouseover",function (event) {
                event.currentTarget.style.fontWeight = "bold"
                event.currentTarget.style.cursor = "pointer"
            })
            tempLabel.addEventListener("mouseout",function (event) {
                event.currentTarget.style.fontWeight = "normal"
                event.currentTarget.style.cursor = "default"
            })
            tempLabel.innerText = index
            if(currentCount === index) {
                tempLabel.style.fontWeight = "bold"
            }
            tempLabel.style.marginRight = "5px"
            tempLabel.style.marginLeft = "5px"
            tempLabel.id = "number-"+index
            tempLabel.addEventListener("click",this.numberClick.bind(this))
            tempPrag.appendChild(tempLabel)
        }

        if(endNumber < totalCount){
            let tempRightArrow = document.createElement("label")
            tempRightArrow.innerText = ">"
            tempRightArrow.addEventListener("mouseover",function (event) {
                event.currentTarget.style.fontWeight = "bold"
                event.currentTarget.style.cursor = "pointer"
            })
            tempRightArrow.addEventListener("mouseout",function (event) {
                event.currentTarget.style.fontWeight = "normal"
                event.currentTarget.style.cursor = "default"
            })
            tempRightArrow.id = "number-"+Number(endNumber+1)
            tempRightArrow.addEventListener("click",this.numberClick.bind(this))
            tempPrag.appendChild(tempRightArrow)
        }

        container.innerHTML = ""
        container.appendChild(tempPrag)
    }

    JH_paging.prototype.numberClick = function (event) {
        let rawNumber = event.currentTarget.id
        this.CURRENT_COUNT = Number(rawNumber.split("-")[1])
        this.paint()
    }

    return JH_paging
}())