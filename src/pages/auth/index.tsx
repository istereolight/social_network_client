import { Card, CardBody, Tab, Tabs } from "@nextui-org/react"
import React, { useState } from "react"
import { Login } from "../../features/user/login"
import { Register } from "../../features/user/register"
import { CucumberIcon } from "../../ui_kit/cucumberIcon"

export const Auth = () => {
  const [selected, setSelected] = useState("login")
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <Card className="max-w-full w-[340px] h-[450px]">
          <CardBody className="overflow-hidden">
            <div className="flex flex-row mx-auto mb-4">
              <CucumberIcon />
              <div className="mx-6 mt-2">Дикий огурец</div>
            </div>

            <Tabs
              fullWidth
              size="md"
              selectedKey={selected}
              onSelectionChange={(key) => setSelected(key as string)}
            >
              <Tab key="login" title="Вход">
                <Login setSelected={setSelected} />
              </Tab>
              <Tab key="sign-up" title="Регистрация">
                <Register setSelected={setSelected} />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
